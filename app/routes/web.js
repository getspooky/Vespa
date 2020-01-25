/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import WelcomePage from '../containers/WelcomePage'
import LoginPage from '../containers/LoginPage';
import RegisterPage from '../containers/RegisterPage';
import ResetPasswordPage from '../containers/ResetPasswordPage';
import ForgotPassword from '../containers/ForgotPasswordPage';
import DashboardPage from '../containers/DashboardPage';
import UsersPage from '../containers/UsersPage';
import PostsPage from '../containers/PostsPage';
import SettingsPage from '../containers/SettingsPage';
import CreateUserPage from '../containers/CreateUserPage';
import CreatePostPage from '../containers/CreatePostPage';
import NotFountPage from '../containers/NotFoundPage';

export default [
  // Index Page.
  { id:'#root', path: '/', component: WelcomePage },
  // Login Page
  { id:'#login', path: '/login', component: LoginPage },
  // Register Page
  { id:'#register', path: '/register', component: RegisterPage },
  // Reset Password
  { id:'#reset', path: '/reset/password/:token', component: ResetPasswordPage},
  // Forgot Password
  { id:'#forgot', path: '/forgot/password/', component: ForgotPassword},
  // Dashboard Page
  { id:'#dashboard', path:'/dashboard', mode:'private', component: DashboardPage },
  // Users
  { id:'#users', path:'/users', mode:'private', component: UsersPage },
  // Posts
  { id:'#posts', path:'/posts', mode:'private', component: PostsPage },
  // Settings
  { id:'#settings', path:'/settings', mode:'private', component: SettingsPage },
  // Create User
  { id:'#createUser', path:'/create/user', mode:'private', component: CreateUserPage },
  // Create Post
  { id:'#createPost', path:'/create/post', mode:'private', component: CreatePostPage },
  // Page not found
  { id:'#pagenotfound', path:'*', component: NotFountPage}
]
