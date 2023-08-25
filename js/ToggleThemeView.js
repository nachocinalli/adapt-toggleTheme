import Adapt from 'core/js/adapt';
import NavigationButtonView from 'core/js/views/NavigationButtonView';
import tooltips from 'core/js/tooltips';

class ToggleThemeView extends NavigationButtonView {
  attributes() {
    return {
      ...super.attributes(),
      'data-tooltip-id': this.model.get('_id')
    };
  }

  initialize(options) {
    super.initialize(options);
    this.setupEventListeners();

    this.render();
    tooltips.register({
      _id: this.model.get('_id'),
      ...(this.model.get('_navTooltip') || {})
    });
  }

  setupEventListeners() {
    this.listenTo(Adapt, {
      remove: this.remove
    });
  }

  triggerEvent(event) {
    event.preventDefault();
    document.querySelector('html').toggleAttribute('data-dark-mode');
    this.model.set('_isDark', document.querySelector('html').hasAttribute('data-dark-mode'));
  }

  static get template() {
    return 'toggleTheme.jsx';
  }
}

export default ToggleThemeView;
