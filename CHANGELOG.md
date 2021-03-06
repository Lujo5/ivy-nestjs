# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.6](https://github.com/Lujo5/ivy-nestjs/compare/v0.2.5...v0.2.6) (2022-07-29)


### Features

* option to use configured hostname without port ([cbcc305](https://github.com/Lujo5/ivy-nestjs/commit/cbcc3054c30de4927d602e07449e7a96b226e228))

### [0.2.5](https://github.com/Lujo5/ivy-nestjs/compare/v0.2.4...v0.2.5) (2022-07-29)


### Bug Fixes

* typeorm many relations now resolve to correct join statements ([4ed22f6](https://github.com/Lujo5/ivy-nestjs/commit/4ed22f6e3fd280bd557a8bc6a5eed595560eb33b))

### [0.2.4](https://github.com/Lujo5/ivy-nestjs/compare/v0.2.3...v0.2.4) (2022-07-29)


### Features

* typeorm service now uses a custom query builder and relations management logic, removed _not query operator ([82c8840](https://github.com/Lujo5/ivy-nestjs/commit/82c88406e99b98e20ddd737d1b44bcae22c86bbb))

### [0.2.3](https://github.com/Lujo5/ivy-nestjs/compare/v0.2.2...v0.2.3) (2022-07-28)


### Features

* add custom join relations generator method ([7dc3511](https://github.com/Lujo5/ivy-nestjs/commit/7dc351122c0190a608a30c8834444c33c603a3b2))

### [0.2.2](https://github.com/Lujo5/ivy-nestjs/compare/v0.2.1...v0.2.2) (2022-07-27)


### Features

* add policy service method for detecting internal method calls ([e636ae9](https://github.com/Lujo5/ivy-nestjs/commit/e636ae911d00b634a2407dd3054a7d6d998e1c22))

### [0.2.1](https://github.com/Lujo5/ivy-nestjs/compare/v0.2.0...v0.2.1) (2022-07-27)


### Features

* enable exclusion of sub relations for populated relations ([3b5f192](https://github.com/Lujo5/ivy-nestjs/commit/3b5f192fea72390796dc6f8dcc653c763bffb4e0))
* exclude transaction in query operation if already under transaction, fix _not filter operator ([2b7b128](https://github.com/Lujo5/ivy-nestjs/commit/2b7b128eaa8c193214df16eaffd195a19b3c0693))

## [0.2.0](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.33...v0.2.0) (2022-07-27)


### ??? BREAKING CHANGES

* rename resource service method for custom connection manager from withManager to useWith

### Features

* change user injection decorator ([4404dba](https://github.com/Lujo5/ivy-nestjs/commit/4404dba37e3b1a3e15965267acbf12315aad9993))
* implement typeorm filtering ([ee5e692](https://github.com/Lujo5/ivy-nestjs/commit/ee5e69209cebb87b0e5e3ce3aa62210d91b64caf))

### [0.1.33](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.32...v0.1.33) (2022-07-21)


### Features

* use findAndCount method instead of two separate queries for typeorm query ([3434a5f](https://github.com/Lujo5/ivy-nestjs/commit/3434a5faeaf94e14f1f2c36445f1d9598a6724e4))

### [0.1.32](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.31...v0.1.32) (2022-07-20)


### Features

* add pagination configuration ([d345401](https://github.com/Lujo5/ivy-nestjs/commit/d345401075d6ec14247d282703e7aa87d1cdad5e))


### Bug Fixes

* **cli:** start with lowercase for controller and resolver variables ([f449f66](https://github.com/Lujo5/ivy-nestjs/commit/f449f66afbf5d1fbc31e2f01c3b5340e8c1d4a9d))

### [0.1.31](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.30...v0.1.31) (2022-07-18)


### Bug Fixes

* roles decorator now works together with authorized decorator ([9c90507](https://github.com/Lujo5/ivy-nestjs/commit/9c905074a352599aceecc71b8a46142c009f364a))

### [0.1.30](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.29...v0.1.30) (2022-07-18)


### Features

* add option to call typeorm service methods using custom entity manager ([2d8bbd0](https://github.com/Lujo5/ivy-nestjs/commit/2d8bbd09bf50261c780be2aa6cfe6f2cdbb76df8))

### [0.1.29](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.28...v0.1.29) (2022-07-18)


### Features

* add deep partial type ([1b7c798](https://github.com/Lujo5/ivy-nestjs/commit/1b7c798587232e84ec004240487f6028e28ecdaf))
* add queue prefix option ([009cf59](https://github.com/Lujo5/ivy-nestjs/commit/009cf590105577acbd9c8c64393593a28c90eb16))

### [0.1.28](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.27...v0.1.28) (2022-07-17)


### Features

* add parse int pipe to id params ([c30e29e](https://github.com/Lujo5/ivy-nestjs/commit/c30e29e85a730b44b5278fc5f413293c10affa61))
* change API tags naming to uppercase words ([5ef3221](https://github.com/Lujo5/ivy-nestjs/commit/5ef32219956b979e8202a6639bd2dc066e672961))

### [0.1.27](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.26...v0.1.27) (2022-07-17)


### Features

* update typings for user details and resource service ([1ba5a87](https://github.com/Lujo5/ivy-nestjs/commit/1ba5a87f1d67d0802dde4157b7f763ba9fdee048))

### [0.1.26](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.25...v0.1.26) (2022-07-17)


### Features

* add support for typeorm filter transformation ([d4d9295](https://github.com/Lujo5/ivy-nestjs/commit/d4d9295dc0bd63e4ab1c4c12bc2daeed69276e03))
* update default db port based on db type ([93c2d2a](https://github.com/Lujo5/ivy-nestjs/commit/93c2d2a1e6b083e12aaa4a7abcc24be6da40eae0))

### [0.1.25](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.24...v0.1.25) (2022-07-16)


### Features

* add queue module ([1065a34](https://github.com/Lujo5/ivy-nestjs/commit/1065a34666396890385c1c2d39cf5001ddbe6dcd))

### [0.1.24](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.23...v0.1.24) (2022-07-14)


### Features

* remove where query filter param ([90fa3d9](https://github.com/Lujo5/ivy-nestjs/commit/90fa3d91369599fc0c4706256b19d07a8b6a2384))

### [0.1.23](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.22...v0.1.23) (2022-07-13)


### Features

* add mongoose support for embedded documents and files ([5c8b9d1](https://github.com/Lujo5/ivy-nestjs/commit/5c8b9d1e3a24bc63ba1bd9f8cf964df69ea26668))
* implement relation file persistence for typeorm resources ([c2f5592](https://github.com/Lujo5/ivy-nestjs/commit/c2f55923cd0bead0d91efcd27a1c511a7cc5cc86))
* update create-resource script for mongoose type relations ([187a7a8](https://github.com/Lujo5/ivy-nestjs/commit/187a7a8279dc51534e6862240ac76b67cd6e5577))
* update mongoose resource service cascade option ([5c7230b](https://github.com/Lujo5/ivy-nestjs/commit/5c7230b6f0c63e43011d058889a8c202685464b2))

### [0.1.22](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.21...v0.1.22) (2022-07-04)

### [0.1.21](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.20...v0.1.21) (2022-07-04)

### [0.1.20](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.19...v0.1.20) (2022-07-03)


### Bug Fixes

* update partial type helper to support disabled graphql projects ([bd23597](https://github.com/Lujo5/ivy-nestjs/commit/bd2359748ba4b45de80985dcc0c03a37536f2de5))

### [0.1.19](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.18...v0.1.19) (2022-07-03)


### Features

* added uuid support for typeorm resources ([a47aaa7](https://github.com/Lujo5/ivy-nestjs/commit/a47aaa717806f545b60a59e1aa96f742a948e646))

### [0.1.18](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.17...v0.1.18) (2022-07-02)


### Features

* enabled string support for typeorm ids ([f5cc5a6](https://github.com/Lujo5/ivy-nestjs/commit/f5cc5a6d39c0a7eff1acd83d3538c4731cb93589))

### [0.1.17](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.16...v0.1.17) (2022-07-02)


### Features

* upgrade create-resource cli ([153bfa4](https://github.com/Lujo5/ivy-nestjs/commit/153bfa49854207ef77c571780402004b681b6b89))

### [0.1.16](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.15...v0.1.16) (2022-06-27)


### Features

* disabled logging for GraphQL playground if module not imported ([f2ed2b3](https://github.com/Lujo5/ivy-nestjs/commit/f2ed2b375d7e5de1c54499dea5c5f980b52e8bb1))

### [0.1.15](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.14...v0.1.15) (2022-06-27)


### Features

* rename skip and limit to page and size query parameters ([073ee59](https://github.com/Lujo5/ivy-nestjs/commit/073ee59f6c7319f8221841468f6fc25f36e5d3b4))


### Bug Fixes

* remove Mongoose filter for typeorm projects ([6830555](https://github.com/Lujo5/ivy-nestjs/commit/6830555d72ca61bdedf45ec09fb81a6ebb3c7603))

### [0.1.14](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.13...v0.1.14) (2022-06-20)


### Features

* **cli:** update create-resource script with multi-word names ([45029ff](https://github.com/Lujo5/ivy-nestjs/commit/45029ffb2cd5263f82304ce226da4e374dc66cd2))

### [0.1.13](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.12...v0.1.13) (2022-06-20)


### Features

* add mongoose logger and update mongo resource service errors ([1be9d08](https://github.com/Lujo5/ivy-nestjs/commit/1be9d08f8f420f58b56842a18fe5eb9c65f340d5))
* add virtual prop decorator default values ([7422be6](https://github.com/Lujo5/ivy-nestjs/commit/7422be6165316df323074e3c51dc4267832669b9))
* **cli:** add create-resource default name property ([e063708](https://github.com/Lujo5/ivy-nestjs/commit/e063708e8288abe7fc37b112246a283cf29008ff))
* implement automatic resource filter Swagger and GraphQL initialization ([936d87a](https://github.com/Lujo5/ivy-nestjs/commit/936d87ae09e72838b88a822c9442e750d8aaef33))
* implement delete files resource controller and resolver endpoints ([461527b](https://github.com/Lujo5/ivy-nestjs/commit/461527b27865b4e7bbf816474812df4b22dd32e3))

### [0.1.12](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.11...v0.1.12) (2022-06-17)


### Features

* add creator column and prop decorators ([ace1d66](https://github.com/Lujo5/ivy-nestjs/commit/ace1d666652b7dde7e1455daf54bc56e522f06ee))
* **cli:** add option to disable all endpoints ([1b3e75f](https://github.com/Lujo5/ivy-nestjs/commit/1b3e75f90b9044240161ed8ae0e4237f57a5436a))
* **resource:** add resource schema abstract class ([4a991e0](https://github.com/Lujo5/ivy-nestjs/commit/4a991e0c432e46d14831d960db51445f07f61dac))
* update cli commands ([ed8b867](https://github.com/Lujo5/ivy-nestjs/commit/ed8b867100917eb3868afcbff8b39713c899b979))
* update cli schemas ([20d91f7](https://github.com/Lujo5/ivy-nestjs/commit/20d91f786715115e61e80533e37780cec09ab017))


### Bug Fixes

* **typeorm:** resolve repository type for service ([872ed9c](https://github.com/Lujo5/ivy-nestjs/commit/872ed9ce6255c30ea6835dddc9dc3d28e66fbe46))

### [0.1.11](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.10...v0.1.11) (2022-06-17)


### Features

* update typeorm config with additional extra resources paths ([b1ebeb3](https://github.com/Lujo5/ivy-nestjs/commit/b1ebeb3c6fe13940e7003ff2175b83a85f70ea2a))

### [0.1.10](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.9...v0.1.10) (2022-06-16)


### Features

* add sort string params normalization ([9549b34](https://github.com/Lujo5/ivy-nestjs/commit/9549b34f57e5710b263a2dd84578bf818912a9a5))

### [0.1.9](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.8...v0.1.9) (2022-06-16)

### [0.1.8](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.7...v0.1.8) (2022-06-16)

### [0.1.7](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.6...v0.1.7) (2022-06-16)


### Bug Fixes

* update winston daily logger import ([b2276e9](https://github.com/Lujo5/ivy-nestjs/commit/b2276e9b669f53ffbdae11b3df19ed2321d65805))

### [0.1.6](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.5...v0.1.6) (2022-06-16)


### Features

* add create-resource script ([7c55919](https://github.com/Lujo5/ivy-nestjs/commit/7c559197c8b37dec82f906e8ebabbc6948bbeb63))


### Bug Fixes

* separate pluralize function to string utils ([d2901cb](https://github.com/Lujo5/ivy-nestjs/commit/d2901cb05ddfd3e79f6588902ca1a2baabe639aa))

### [0.1.5](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.4...v0.1.5) (2022-06-15)


### Features

* add app hostname variable ([5942453](https://github.com/Lujo5/ivy-nestjs/commit/594245380d382d3c713da77a1d13629c30b31e98))

### [0.1.4](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.3...v0.1.4) (2022-06-15)


### Features

* add typeorm migration autorun service ([9fc4caa](https://github.com/Lujo5/ivy-nestjs/commit/9fc4caa47b36424b42d031dc09b5e9b81eb9dae5))

### [0.1.3](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.2...v0.1.3) (2022-06-14)


### Bug Fixes

* fix error with mongoose database type ([0da6ab0](https://github.com/Lujo5/ivy-nestjs/commit/0da6ab08cc9b75c7b0fe85b17453147412e27645))

### [0.1.2](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.1...v0.1.2) (2022-06-14)


### Features

* extended FileMeta entity with ResourceEntity class ([c2a8ac0](https://github.com/Lujo5/ivy-nestjs/commit/c2a8ac0e30093e8f88f5964dd7847eb1c64767a3))


### Bug Fixes

* resolve imports ([1d13f19](https://github.com/Lujo5/ivy-nestjs/commit/1d13f19a35e862e3932a9f532a8fadffbf6b1019))

### [0.1.1](https://github.com/Lujo5/ivy-nestjs/compare/v0.1.0...v0.1.1) (2022-06-14)


### Features

* implement file storage for typeorm ([8a305d3](https://github.com/Lujo5/ivy-nestjs/commit/8a305d3dd09d4310df2fbddf0fc7ef5cb9b9173e))

## [0.1.0](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.27...v0.1.0) (2022-06-12)


### ??? BREAKING CHANGES

* add typeorm services
* rename register user method
* add automatic admin creation logic

### Features

* add automatic admin creation logic ([79aaf0c](https://github.com/Lujo5/ivy-nestjs/commit/79aaf0ca67421b3267eaebf47ffd8524de98e1fa))
* add custom typeorm logger and logging options ([f85cb4a](https://github.com/Lujo5/ivy-nestjs/commit/f85cb4adc15f25679303660b04b8079351c89f55))
* add typeorm services ([c8f3a42](https://github.com/Lujo5/ivy-nestjs/commit/c8f3a42b7b23354e84cd1928c20c2fdac55432ad))
* implement disable graphql option ([7a421c4](https://github.com/Lujo5/ivy-nestjs/commit/7a421c4788ff1141c9dae61b845ba736fee45181))
* optional auth module injections ([3656716](https://github.com/Lujo5/ivy-nestjs/commit/365671607b2d9fc36bcea14c8563246719aee680))
* rename register user method ([93a3134](https://github.com/Lujo5/ivy-nestjs/commit/93a31347b4239e081c06a4995b120119cf5185ae))


### Bug Fixes

* add default params as empty array ([b225698](https://github.com/Lujo5/ivy-nestjs/commit/b225698462e65f860bda67123074231f89378fdb))
* change graphql id type to ID ([0313f7b](https://github.com/Lujo5/ivy-nestjs/commit/0313f7b66c0339328a1dd6c32f643d3a684517de))
* disabled jwt option with default secret ([4d4e3a6](https://github.com/Lujo5/ivy-nestjs/commit/4d4e3a6db48bfaf89f8ceb2c778ba30b946363bc))
* enable autoload of typeorm entities ([efc187e](https://github.com/Lujo5/ivy-nestjs/commit/efc187e965cd95967a2dad9d1854e6a882c45116))
* enable default graphql ([5cb6e38](https://github.com/Lujo5/ivy-nestjs/commit/5cb6e38ba5bd61fa7deda5005de442cceae195a9))
* support for both mongoose and typeorm health check ([0173dbb](https://github.com/Lujo5/ivy-nestjs/commit/0173dbbbc9ca3df25eec181157fffb6e24dbb4de))

### [0.0.27](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.26...v0.0.27) (2022-06-11)


### Features

* add ormconfig file ([49b53e4](https://github.com/Lujo5/ivy-nestjs/commit/49b53e469330df804b975391a9e99015c643e653))
* add source root to database config ([8315b68](https://github.com/Lujo5/ivy-nestjs/commit/8315b685b56709677a7d9e80f3fda7dec565d797))
* add typeorm module support ([3185150](https://github.com/Lujo5/ivy-nestjs/commit/318515062aa81c8220bc7e9fdc48ee2ecdba6e9b))

### [0.0.26](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.25...v0.0.26) (2022-06-09)


### Features

* add graphql and mongoose modules ([9a98725](https://github.com/Lujo5/ivy-nestjs/commit/9a98725c19b1e74eabfba0b131df916e8350dd00))


### Bug Fixes

* add enabled option ([0b792bb](https://github.com/Lujo5/ivy-nestjs/commit/0b792bb1e106753826dd20d6e3de7068f6a72dc8))
* remove enabled generic type ([95d03ec](https://github.com/Lujo5/ivy-nestjs/commit/95d03ecdf42a192bec77ef3994fc3bd4d12a6b8c))
* update auth type enabling logic ([6d1c5d7](https://github.com/Lujo5/ivy-nestjs/commit/6d1c5d7365e1fa258f3c7da3ad8cecfc103b6601))

### [0.0.25](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.24...v0.0.25) (2022-06-09)


### Features

* merged config service with auth settings ([976b096](https://github.com/Lujo5/ivy-nestjs/commit/976b096c7bbe9d619a1510e568fd064d05013da1))


### Bug Fixes

* resolve real auth controller route ([0bae2e5](https://github.com/Lujo5/ivy-nestjs/commit/0bae2e50f558d1721218a0fce2c1c7c517bfd4bf))

### [0.0.24](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.23...v0.0.24) (2022-06-07)


### Features

* add mongo user details service implementation ([602835a](https://github.com/Lujo5/ivy-nestjs/commit/602835af817b1a528096c2e665648538eeecbf63))

### [0.0.23](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.22...v0.0.23) (2022-06-06)

### [0.0.22](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.21...v0.0.22) (2022-06-06)


### Features

* implement default config values for most of packages ([5460fbd](https://github.com/Lujo5/ivy-nestjs/commit/5460fbd86b9f355fb866208b0205747e95150122))

### [0.0.21](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.20...v0.0.21) (2022-06-06)


### Features

* update copy script ([f31b314](https://github.com/Lujo5/ivy-nestjs/commit/f31b31498314900dc5b4062e54cba6bb3ab43039))

### [0.0.20](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.19...v0.0.20) (2022-06-06)


### Bug Fixes

* remove tsbuildinfo from dist ([4d16541](https://github.com/Lujo5/ivy-nestjs/commit/4d165410031370e48b32e1f0e7fa91a085362eab))

### [0.0.19](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.18...v0.0.19) (2022-06-06)


### Bug Fixes

* add rest/graphql flag for console log swagger/graphql doc endpoints ([991d754](https://github.com/Lujo5/ivy-nestjs/commit/991d75427bd119af1d53256b87a81be4a0b56184))

### [0.0.18](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.17...v0.0.18) (2022-06-06)


### Features

* add class validator shim ([8d94b9e](https://github.com/Lujo5/ivy-nestjs/commit/8d94b9e4efcf3108f89c85d722b0ed18a9b1fdfb))

### [0.0.17](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.16...v0.0.17) (2022-06-06)

### [0.0.16](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.15...v0.0.16) (2022-06-06)


### Features

* add auto schema generation plugin ([4e620bf](https://github.com/Lujo5/ivy-nestjs/commit/4e620bf271d153a55bf4d438abae386236b9f89b))

### [0.0.15](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.14...v0.0.15) (2022-06-06)


### Bug Fixes

* fix pluralize import ([3cc16c6](https://github.com/Lujo5/ivy-nestjs/commit/3cc16c614368bd1be5ea1c51a1f11ebdca73262c))

### [0.0.14](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.13...v0.0.14) (2022-06-06)


### Features

* reformat code, ([3232e20](https://github.com/Lujo5/ivy-nestjs/commit/3232e201ddc60363adcfe0925f9c96321549c949))

### [0.0.13](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.12...v0.0.13) (2022-06-06)


### Bug Fixes

* remove changelog from bundle folder ([3833310](https://github.com/Lujo5/ivy-nestjs/commit/3833310561e19e37389b0c58a41b50ababd72129))

### [0.0.12](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.11...v0.0.12) (2022-06-06)


### Features

* add utility scripts, change build and publish process ([81ac9f4](https://github.com/Lujo5/ivy-nestjs/commit/81ac9f4b2bed1204cc51872aecd265af2ba4550f))

### [0.0.11](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.10...v0.0.11) (2022-06-06)


### Features

* add files in package ([25c2fe9](https://github.com/Lujo5/ivy-nestjs/commit/25c2fe974c5691d0e32e8e7792dfe37b76e65657))


### Bug Fixes

* fix npmignore ([f3d5b7f](https://github.com/Lujo5/ivy-nestjs/commit/f3d5b7fbf749e0d258b972283c04bfba178789ee))

### [0.0.10](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.9...v0.0.10) (2022-06-06)


### Bug Fixes

* fix npmignore ([3219e61](https://github.com/Lujo5/ivy-nestjs/commit/3219e6131c5cae2ab382ff5e72e17c5c8a1d76f2))

### [0.0.9](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.8...v0.0.9) (2022-06-06)


### Bug Fixes

* exclude .idea from package ([b7cc995](https://github.com/Lujo5/ivy-nestjs/commit/b7cc995fd11635aaa3985580066c87e66d9a59a7))

### [0.0.8](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.7...v0.0.8) (2022-06-06)


### Bug Fixes

* remove .idea from package ([89e7f4a](https://github.com/Lujo5/ivy-nestjs/commit/89e7f4a35eb3a00f17fc1152ee9de3f3335ece70))
* update script task ([b48b74d](https://github.com/Lujo5/ivy-nestjs/commit/b48b74df9936c389e50e0795a232e98505c2b658))

### [0.0.7](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.6...v0.0.7) (2022-06-06)


### Bug Fixes

* add unwanted files to npmignore ([924b2cd](https://github.com/Lujo5/ivy-nestjs/commit/924b2cd4827e9c2522eea7ee99031112548d6674))

### [0.0.6](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.5...v0.0.6) (2022-06-06)


### Features

* update release script ([32b4d8a](https://github.com/Lujo5/ivy-nestjs/commit/32b4d8a8b869c970b8d98536243afc137ab5d712))


### Bug Fixes

* remove postpublish script ([b055252](https://github.com/Lujo5/ivy-nestjs/commit/b055252b6e3a5dedd205be07baebbf8f011afedd))

### [0.0.5](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.4...v0.0.5) (2022-06-06)


### Features

* update keywords ([ee1b873](https://github.com/Lujo5/ivy-nestjs/commit/ee1b873472332327747b0fddfd4e967119ee69ff))

### [0.0.4](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.3...v0.0.4) (2022-06-06)


### Features

* update package scripts ([22c89be](https://github.com/Lujo5/ivy-nestjs/commit/22c89beecd4c8bc58579fdbc3a94fcaf94472506))

### [0.0.3](https://github.com/Lujo5/ivy-nestjs/compare/v0.0.2...v0.0.3) (2022-06-06)


### Features

* update readme and package tasks ([81d66e9](https://github.com/Lujo5/ivy-nestjs/commit/81d66e948b800b22cecb0587946da1c29d64eee4))

### 0.0.2 (2022-06-06)


### Features

* add AppUtil class with default app initialization logic ([db3eb6c](https://github.com/Lujo5/ivy-nestjs/commit/db3eb6c983fad7795131e71a137e34b1c5f58b95))
* add config module, add compodoc task ([dda434d](https://github.com/Lujo5/ivy-nestjs/commit/dda434d260bb5716f8939393d852fe52dacdbf00))
* add default config forRoot args ([1df7d32](https://github.com/Lujo5/ivy-nestjs/commit/1df7d32be0913d4c4d849c41994a99845a32947b))


### Bug Fixes

* fix failed build ([6bc2b74](https://github.com/Lujo5/ivy-nestjs/commit/6bc2b747fbbd59122428072ec7b52d74fc193265))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
