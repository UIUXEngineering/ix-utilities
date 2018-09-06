import { task } from 'gulp';
import { sequenceTask } from '../../package-tools/sequence-task';
import { execTask } from '../util';

// CDK
task('test.cdk', execTask('ng', ['test', '@uiux/cdk', '--code-coverage']));

// ng test @uiux/d3
task('test.d3', execTask('ng', [ 'test', '@uiux/d3', '--code-coverage' ]));

// FN
task('test.fn', execTask('ng', ['test', '@uiux/fn', '--code-coverage']));

// DAL
task('test.dal', execTask('ng', ['test', '@uiux/dal', '--code-coverage']));

// ng test @uiux/rxjs
task('test.rxjs', execTask('ng', ['test', '@uiux/rxjs', '--code-coverage']));

// ng test @uiux/services
task('test.svc', execTask('ng', ['test', '@uiux/services', '--code-coverage']));

// Material
task('test.mat', execTask('ng', ['test', '@uiux/material', '--code-coverage']));

task('test.projects', sequenceTask(
  'test.cdk',
  'test.dal',
  'test.fn',
  'test.mat',
  'test.rxjs',
  'test.svc',
));
