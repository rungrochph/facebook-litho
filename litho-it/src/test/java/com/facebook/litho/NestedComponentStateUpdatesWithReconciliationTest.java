/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho;

import static androidx.test.core.app.ApplicationProvider.getApplicationContext;
import static org.assertj.core.api.Assertions.fail;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import android.graphics.Color;
import android.os.Looper;
import androidx.annotation.Nullable;
import com.facebook.litho.config.ComponentsConfiguration;
import com.facebook.litho.testing.Whitebox;
import com.facebook.litho.testing.helper.ComponentTestHelper;
import com.facebook.litho.testing.logging.TestComponentsLogger;
import com.facebook.litho.testing.testrunner.LithoTestRunner;
import com.facebook.litho.widget.SolidColor;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.StringJoiner;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.Shadows;
import org.robolectric.annotation.LooperMode;
import org.robolectric.shadows.ShadowLooper;

@LooperMode(LooperMode.Mode.LEGACY)
@RunWith(LithoTestRunner.class)
public class NestedComponentStateUpdatesWithReconciliationTest {

  private static final String mLogTag = "logTag";

  private ComponentContext c;
  private ShadowLooper mLayoutThreadShadowLooper;
  private ComponentTree mComponentTree;
  private ComponentsLogger mComponentsLogger;
  private LithoView mLithoView;

  private static final int STATE_VALUE_INITIAL_COUNT = 4;

  @Before
  public void before() {
    ComponentsConfiguration.isEndToEndTestRun = true;

    NodeConfig.sInternalNodeFactory =
        new NodeConfig.InternalNodeFactory() {
          @Override
          public InternalNode create(final ComponentContext c) {
            DefaultInternalNode node = spy(new DefaultInternalNode(c));
            node.getYogaNode().setData(node);
            return node;
          }

          @Override
          public InternalNode.NestedTreeHolder createNestedTreeHolder(
              ComponentContext c, @Nullable TreeProps props) {
            DefaultNestedTreeHolder node = spy(new DefaultNestedTreeHolder(c, props));
            node.getYogaNode().setData(node);
            return node;
          }
        };
    mComponentsLogger = new TestComponentsLogger();
    c = new ComponentContext(getApplicationContext(), mLogTag, mComponentsLogger);
    mLayoutThreadShadowLooper =
        Shadows.shadowOf(
            (Looper) Whitebox.invokeMethod(ComponentTree.class, "getDefaultLayoutThreadLooper"));
  }

  @After
  public void after() {
    ComponentsConfiguration.isEndToEndTestRun = false;
    NodeConfig.sInternalNodeFactory = null;
    NodeConfig.sYogaNodeFactory = null;
  }

  @Test
  public void noStateUpdates() {
    measureAndLayoutComponent(createSimpleTree());
    LayoutState current = mComponentTree.getMainThreadLayoutState();
    DefaultInternalNode layout = (DefaultInternalNode) current.getLayoutRoot();
    assertCloneCalledForOnly(layout, null);
  }

  /*

    root
     /\
    A  B
       /\
     [C] D

  */
  @Test
  public void updateStateSync_singleComponentC() {
    measureAndLayoutComponent(createSimpleTree());

    LayoutState current = mComponentTree.getMainThreadLayoutState();
    DefaultInternalNode layout = (DefaultInternalNode) current.getLayoutRoot();

    mComponentTree.updateStateSync("root,B,C", createStateUpdate(), "test", false);

    Set<String> set = new HashSet<>();
    set.add("root");
    set.add("root,A");
    set.add("root,B");
    set.add("root,B,D");
    assertCloneCalledForOnly(layout, set);
  }

  /*

    root
     /\
    A  B
       /\
     [C] D

  */
  @Test
  public void updateStateAsync_singleComponentC() {
    measureAndLayoutComponent(createSimpleTree());

    LayoutState current = mComponentTree.getMainThreadLayoutState();
    DefaultInternalNode layout = (DefaultInternalNode) current.getLayoutRoot();

    mComponentTree.updateStateAsync("root,B,C", createStateUpdate(), "test", false);
    mLayoutThreadShadowLooper.runToEndOfTasks();

    Set<String> set = new HashSet<>();
    set.add("root");
    set.add("root,A");
    set.add("root,B");
    set.add("root,B,D");
    assertCloneCalledForOnly(layout, set);
  }

  /*

    root
     /\
    A  B
       /\
      C [D]

  */
  @Test
  public void updateStateSync_singleComponentD() {
    measureAndLayoutComponent(createSimpleTree());

    LayoutState current = mComponentTree.getMainThreadLayoutState();
    DefaultInternalNode layout = (DefaultInternalNode) current.getLayoutRoot();

    mComponentTree.updateStateSync("root,B,D", createStateUpdate(), "test", false);

    Set<String> set = new HashSet<>();
    set.add("root");
    set.add("root,A");
    set.add("root,B");
    set.add("root,B,C");
    assertCloneCalledForOnly(layout, set);
  }

  /*

    root
     /\
    A  B
       /\
      C [D]

  */
  @Test
  public void updateStateAsync_singleComponentD() {
    measureAndLayoutComponent(createSimpleTree());

    LayoutState current = mComponentTree.getMainThreadLayoutState();
    DefaultInternalNode layout = (DefaultInternalNode) current.getLayoutRoot();

    mComponentTree.updateStateAsync("root,B,D", createStateUpdate(), "test", false);
    mLayoutThreadShadowLooper.runToEndOfTasks();

    Set<String> set = new HashSet<>();
    set.add("root");
    set.add("root,A");
    set.add("root,B");
    set.add("root,B,C");
    assertCloneCalledForOnly(layout, set);
  }

  /*

    root
     /\
    A  B
       /\
     [C][D]

  */
  @Test
  public void updateStateAsync_multipleComponents() {
    measureAndLayoutComponent(createSimpleTree());

    LayoutState current = mComponentTree.getMainThreadLayoutState();
    DefaultInternalNode layout = (DefaultInternalNode) current.getLayoutRoot();

    mComponentTree.updateStateAsync("root,B,C", createStateUpdate(), "test-0", false);
    mComponentTree.updateStateAsync("root,B,D", createStateUpdate(), "test-1", false);
    mLayoutThreadShadowLooper.runToEndOfTasks();

    Set<String> set = new HashSet<>();
    set.add("root");
    set.add("root,A");
    set.add("root,B");
    assertCloneCalledForOnly(layout, set);
  }

  /*

    root
     /\
    A  B
       /\
      C  D

  */
  private Component createSimpleTree() {
    final Component root;
    final Component A, B, C, D;

    A = SolidColor.create(c).color(Color.RED).build();
    A.setKey("A");

    C = new DummyComponent();
    C.setKey("C");

    D = new DummyComponent();
    D.setKey("D");

    B = Row.create(c).key("B").child(C).child(D).build();

    root = Column.create(c).key("root").child(A).child(B).build();

    return root;
  }

  private void measureAndLayoutComponent(Component root) {
    mComponentTree = spy(ComponentTree.create(c, root).isReconciliationEnabled(true).build());
    mLithoView = new LithoView(c);
    mLithoView.setComponentTree(mComponentTree);
    mLithoView.onAttachedToWindow();
    ComponentTestHelper.measureAndLayout(mLithoView);
  }

  private static void assertCloneCalledForOnly(DefaultInternalNode layout, Set<String> keys) {
    if (keys == null) {
      keys = new HashSet<>();
    }
    assertCloneCalledFor(layout, keys);
    assertIsEmpty(keys);
  }

  private static void assertCloneCalledFor(DefaultInternalNode layout, Set<String> keys) {
    boolean isInSet = false;
    final List<Component> components = layout.getComponents();
    final List<String> componentKeys = layout.getComponentKeys();

    for (int i = 0, size = components.size(); i < size; i++) {
      final Component c = components.get(i);
      final String globalKey =
          ComponentUtils.getGlobalKey(c, componentKeys == null ? null : componentKeys.get(i));
      if (keys.contains(globalKey)) {
        keys.remove(globalKey);
        isInSet = true;
        break;
      }
    }

    if (isInSet) {
      assertCloneCalled(layout);
    } else {
      assertCloneNotCalled(layout);
    }

    int count = layout.getChildCount();
    for (int i = 0; i < count; i++) {
      InternalNode child = layout.getChildAt(i);
      assertCloneCalledFor((DefaultInternalNode) child, keys);
    }
  }

  private static void assertCloneCalled(DefaultInternalNode layout) {
    verify(layout, times(1)).clone();
  }

  private static void assertCloneNotCalled(DefaultInternalNode layout) {
    verify(layout, times(0)).clone();
  }

  private static void assertIsEmpty(Set<String> keys) {
    if (!keys.isEmpty()) {
      StringJoiner joiner = new StringJoiner(", ");
      for (String s : keys) {
        joiner.add(s);
      }
      fail("clone not called for " + joiner.toString());
    }
  }

  static class DummyComponent extends Component {

    public DummyComponent() {
      super("TestComponent");
      setStateContainer(new DummyStateContainer());
    }

    @Override
    protected boolean hasState() {
      return true;
    }

    @Override
    protected void createInitialState(ComponentContext c) {
      getStateContainerImpl(c).mCount = STATE_VALUE_INITIAL_COUNT;
    }

    @Override
    protected void transferState(
        StateContainer prevStateContainer, StateContainer nextStateContainer) {
      DummyStateContainer prevStateContainerImpl = (DummyStateContainer) prevStateContainer;
      DummyStateContainer nextStateContainerImpl = (DummyStateContainer) nextStateContainer;
      nextStateContainerImpl.mCount = prevStateContainerImpl.mCount;
    }

    @Nullable
    @Override
    protected StateContainer createStateContainer() {
      return new DummyStateContainer();
    }

    @Nullable
    protected DummyStateContainer getStateContainerImpl(ComponentContext c) {
      return (DummyStateContainer) Component.getStateContainer(c, this);
    }
  }

  static class DummyStateContainer extends StateContainer {
    int mCount;

    @Override
    public void applyStateUpdate(StateUpdate stateUpdate) {
      switch (stateUpdate.type) {
        case 0:
          mCount += 1;
          break;
      }
    }
  }

  private StateContainer.StateUpdate createStateUpdate() {
    return new StateContainer.StateUpdate(0);
  }
}
