import { shallow } from 'enzyme';
import App from './App';

test('test checkbox in app js', () => {
  const app = shallow(<App></App>);
  const label = app.find('label');
  expect(label.text()).toEqual('label off');
});

test('test to check the checkbox state change', () => {
  const app = shallow(<App></App>);
  const label = app.find('label');
  expect(label.text()).toEqual('label off');
  app.find('input').simulate('change');
  expect(label.text()).toEqual('label on');
});
