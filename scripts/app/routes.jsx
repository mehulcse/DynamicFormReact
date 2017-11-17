import React from 'react';
import {Router, IndexRoute} from 'react-router';
import NotFound from '../NotFound.jsx';
import Footer from '../app/Footer.jsx';
import Header from '../app/Header.jsx';
import DynamicForm from '../components/DynamicForm.jsx';

export default [
  <IndexRoute key="index" components={ { main: DynamicForm } } />,

  <Router key='DynamicForm' path="/DynamicForm" components={ { main: DynamicForm, footer: Footer, header: Header } } />,

  <Router key="notFound" path="*" components={ { main: NotFound } } />
];
