import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('teacher-ticket-tile', 'Integration | Component | teacher ticket tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{teacher-ticket-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#teacher-ticket-tile}}
      template block text
    {{/teacher-ticket-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
