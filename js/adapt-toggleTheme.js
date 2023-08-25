import Adapt from 'core/js/adapt';
import navigation from 'core/js/navigation';
import NavigationButtonModel from 'core/js/models/NavigationButtonModel';
import ToggleThemeView from './ToggleThemeView';

class ToggleTheme extends Backbone.Controller {
  initialize() {
    this.listenTo(Adapt, 'router:menu router:page', this.onRouter);
  }

  onRouter() {
    console.log('onNavReady');
    if (!this.checkCourseIsEnabled()) return;
    $('.nav__togglethemebutton-btn').remove();
    this.renderNavigationView();
  }

  static get globalsConfig() {
    return Adapt.course.get('_globals')?._extensions?._toggleTheme;
  }

  renderNavigationView() {
    const { _navOrder = -1, alt, _showLabel = true, navLabel = '', _navTooltip = {} } = Adapt.course?.get('_toggleTheme');
    const model = new NavigationButtonModel({
      _id: 'toggleThemeButton',
      _order: _navOrder,
      _showLabel,
      _classes: 'btn-icon nav__btn nav__togglethemebutton-btn',
      _role: 'button',
      ariaLabel: alt || navLabel,
      text: navLabel,
      _navTooltip,
      _event: 'toggleTheme'
    });
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      model.set('_isDark', true);
      document.querySelector('html').setAttribute('data-dark-mode', 'true');
    }
    navigation.addButton(new ToggleThemeView({ model }));
  }

  checkCourseIsEnabled() {
    const courseModel = Adapt.course.get('_toggleTheme');
    if (!courseModel || !courseModel._isEnabled) return false;
    return true;
  }
}

export default new ToggleTheme();
