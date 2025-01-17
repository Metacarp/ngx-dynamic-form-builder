# [1.0.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.10.1...1.0.0) (2019-05-04)


### Bug Fixes

* Change private transformValidationErrors to public ([f80e6e9](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/f80e6e9))


### Features

* Add method resetValidateAllFormFields to reset all errors ([8642886](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/8642886))
* Add support use native angular validations, create sample for it - combo ([fd48f90](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/fd48f90))



## [0.10.1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.10.0...0.10.1) (2019-05-04)


### Bug Fixes

* Add use standalone lodash.clonedeep and lodash.mergewith in lib ([d38198d](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/d38198d))



# [0.10.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.9.0...0.10.0) (2019-05-03)


### Bug Fixes

* Update dependencies ([3c88ce1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/3c88ce1))


### Features

* Add support classLevelValidator with native angular validators and update sample for it ([#106](https://github.com/EndyKaufman/ngx-dynamic-form-builder/issues/106), [#107](https://github.com/EndyKaufman/ngx-dynamic-form-builder/issues/107)) ([26ee044](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/26ee044))



# [0.9.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.8.1...0.9.0) (2019-01-21)


### Bug Fixes

* Ivalidate formGroup if founded any castomValidationErrors ([26a26ec](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/26a26ec))


### Features

* Add objectChange event on update with set object ([62e05d8](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/62e05d8))



## [0.8.1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.8.0...0.8.1) (2019-01-12)


### Bug Fixes

* **dynamic-form-group:** Refactor isValid detect in createCustomValidation ([49871c5](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/49871c5))
* Set value from control on createNestedValidate if it ([6dc9c1c](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/6dc9c1c))



# [0.8.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.7.0...0.8.0) (2019-01-12)


### Bug Fixes

* Revert to original getClassValidators for correct validate arrays and refactor code more readable ([bf296c3](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/bf296c3))
* **dynamic-form-group:** Fix test error due to recursive types ([87bfee8](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/87bfee8))


### Features

* **dynamic-form-control:** Add validation definitions to form controls ([8cbb9a2](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/8cbb9a2))
* **dynamic-form-group:** Group type safety ([f183e49](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/f183e49))
* **dynamic-form-group:** Implement a non-observable error API ([ac713c8](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/ac713c8))



# [0.7.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.6.1...0.7.0) (2018-12-30)


### Features

* Change externalErrors and validatorOptions with getter and setter to functions: setExternalErrorsAsync, setExternalErrors, clearExternalErrorsAsync, clearExternalErrors and setValidatorOptionsAsync, setValidatorOptions ([e256c0f](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/e256c0f))



## [0.6.1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.6.0...0.6.1) (2018-12-21)


### Bug Fixes

* Update transformValidationErrors for correct output errors for array ([e526426](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/e526426))



# [0.6.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.5.1...0.6.0) (2018-12-21)


### Bug Fixes

* Wrong work with exists nested exeperimental sample ([#74](https://github.com/EndyKaufman/ngx-dynamic-form-builder/issues/74)) ([407b9de](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/407b9de))


### Features

* Add support bind class validator to array controls and array form groups ([#74](https://github.com/EndyKaufman/ngx-dynamic-form-builder/issues/74), [#75](https://github.com/EndyKaufman/ngx-dynamic-form-builder/issues/75)) ([90f8c3e](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/90f8c3e))



## [0.5.1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.5.0...0.5.1) (2018-12-10)


### Bug Fixes

* Update dependencies ([db8c595](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/db8c595))



# [0.5.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.4.4...0.5.0) (2018-11-17)


### Features

* **deps:** Update dependencies ([65913d1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/65913d1))



<a name="0.4.4"></a>
## [0.4.4](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.4.3...0.4.4) (2018-09-16)


### Bug Fixes

* **deps:** Update dependencies ([5833025](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/5833025))



<a name="0.4.3"></a>
## [0.4.3](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.4.2...0.4.3) (2018-06-18)


### Bug Fixes

* **dynamic-form-group:** Fix validators that expect more than one argument and fix work with conditional validations [#36](https://github.com/EndyKaufman/ngx-dynamic-form-builder/issues/36) ([30a0a6c](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/30a0a6c))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.4.1...0.4.2) (2018-06-06)


### Bug Fixes

* Add whitelistedNonPeerDependencies in ng-package.json ([06fdac7](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/06fdac7))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.4.0...0.4.1) (2018-06-05)


### Bug Fixes

* Add needed deps to devDependencies ([540e775](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/540e775))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.3.2...0.4.0) (2018-06-03)


### Bug Fixes

* **sw:** Update path for ngsw-worker.js ([0491271](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/0491271))


### Features

* Update to Angular 6 and Rx 6 ([f600e3c](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/f600e3c))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.3.1...0.3.2) (2018-03-23)


### Bug Fixes

* **dynamic-form-group:** Change code for correct work with externalErrors (renamed from otherErrors) ([087772b](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/087772b))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.3.0...0.3.1) (2018-03-09)


### Bug Fixes

* **dynamic-form-builder:** Add ValidatorOptions for nested objects validations ([95b4dfd](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/95b4dfd))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.2.1...0.3.0) (2018-03-09)


### Features

* **dynamic-form-builder:** Add support use ValidatorOptions ([57ac15a](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/57ac15a))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.2.0...0.2.1) (2018-03-01)


### Bug Fixes

* **dynamic-form-group:** Change return object type for nested object if it type is DynamicFormGroup ([8bb303e](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/8bb303e))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/EndyKaufman/ngx-dynamic-form-builder/compare/0.1.0...0.2.0) (2018-02-28)


### Bug Fixes

* **dynamic-form-group:** Remove hard dependencies of class-transformer, for use alternative class mapper using the decorators ([8aff1c4](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/8aff1c4))


### Features

* **dynamic-form-group:** Added method classToClass and plainToClass to override and customize transformation algorithm ([734f9ea](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/734f9ea))



<a name="0.1.0"></a>
# 0.1.0 (2018-02-28)


### Bug Fixes

* Change form.object update method ([417a533](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/417a533))
* **dynamic-form-builder:** Divided the old method and the experimental by the optional controlsConfig attr ([928a908](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/928a908))
* **scripts:** Update for correct build ([30f53b5](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/30f53b5))


### Features

* **dynamic-form-group:** controlsConfig set to optional in method "group" ([811b824](https://github.com/EndyKaufman/ngx-dynamic-form-builder/commit/811b824))



