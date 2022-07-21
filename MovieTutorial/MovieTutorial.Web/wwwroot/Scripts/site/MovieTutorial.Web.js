var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailAddressEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailAddressEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = MovieDB.Gender || (MovieDB.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'MovieTutorial.MovieDB.Gender', 'MovieDB.Gender');
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreColumns = /** @class */ (function () {
            function GenreColumns() {
            }
            GenreColumns.columnsKey = 'MovieDB.Genre';
            return GenreColumns;
        }());
        MovieDB.GenreColumns = GenreColumns;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreForm = /** @class */ (function (_super) {
            __extends(GenreForm, _super);
            function GenreForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GenreForm.init) {
                    GenreForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(GenreForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            GenreForm.formKey = 'MovieDB.Genre';
            return GenreForm;
        }(Serenity.PrefixedContext));
        MovieDB.GenreForm = GenreForm;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreRow;
        (function (GenreRow) {
            GenreRow.idProperty = 'GenreId';
            GenreRow.nameProperty = 'Name';
            GenreRow.localTextPrefix = 'MovieDB.Genre';
            GenreRow.lookupKey = 'MovieDB.Genre';
            function getLookup() {
                return Q.getLookup('MovieDB.Genre');
            }
            GenreRow.getLookup = getLookup;
            GenreRow.deletePermission = 'Administration:General';
            GenreRow.insertPermission = 'Administration:General';
            GenreRow.readPermission = 'Administration:General';
            GenreRow.updatePermission = 'Administration:General';
        })(GenreRow = MovieDB.GenreRow || (MovieDB.GenreRow = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreService;
        (function (GenreService) {
            GenreService.baseUrl = 'MovieDB/Genre';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GenreService[x] = function (r, s, o) {
                    return Q.serviceRequest(GenreService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GenreService = MovieDB.GenreService || (MovieDB.GenreService = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastColumns = /** @class */ (function () {
            function MovieCastColumns() {
            }
            MovieCastColumns.columnsKey = 'MovieDB.MovieCast';
            return MovieCastColumns;
        }());
        MovieDB.MovieCastColumns = MovieCastColumns;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastForm = /** @class */ (function (_super) {
            __extends(MovieCastForm, _super);
            function MovieCastForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovieCastForm.init) {
                    MovieCastForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(MovieCastForm, [
                        'PersonId', w0,
                        'Character', w1
                    ]);
                }
                return _this;
            }
            MovieCastForm.formKey = 'MovieDB.MovieCast';
            return MovieCastForm;
        }(Serenity.PrefixedContext));
        MovieDB.MovieCastForm = MovieCastForm;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastRow;
        (function (MovieCastRow) {
            MovieCastRow.idProperty = 'MovieCastId';
            MovieCastRow.nameProperty = 'Character';
            MovieCastRow.localTextPrefix = 'MovieDB.MovieCast';
            MovieCastRow.deletePermission = 'Administration:General';
            MovieCastRow.insertPermission = 'Administration:General';
            MovieCastRow.readPermission = 'Administration:General';
            MovieCastRow.updatePermission = 'Administration:General';
        })(MovieCastRow = MovieDB.MovieCastRow || (MovieDB.MovieCastRow = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastService;
        (function (MovieCastService) {
            MovieCastService.baseUrl = 'MovieDB/MovieCast';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieCastService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieCastService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieCastService = MovieDB.MovieCastService || (MovieDB.MovieCastService = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieColumns = /** @class */ (function () {
            function MovieColumns() {
            }
            MovieColumns.columnsKey = 'MovieDB.Movie';
            return MovieColumns;
        }());
        MovieDB.MovieColumns = MovieColumns;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieForm = /** @class */ (function (_super) {
            __extends(MovieForm, _super);
            function MovieForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovieForm.init) {
                    MovieForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = MovieDB.MovieCastEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.MultipleImageUploadEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.DateEditor;
                    var w7 = s.LookupEditor;
                    var w8 = s.EnumEditor;
                    Q.initFormType(MovieForm, [
                        'Title', w0,
                        'Description', w1,
                        'CastList', w2,
                        'PrimaryImage', w3,
                        'GalleryImages', w4,
                        'Storyline', w1,
                        'Year', w5,
                        'ReleaseDate', w6,
                        'GenreList', w7,
                        'Kind', w8,
                        'Runtime', w5
                    ]);
                }
                return _this;
            }
            MovieForm.formKey = 'MovieDB.Movie';
            return MovieForm;
        }(Serenity.PrefixedContext));
        MovieDB.MovieForm = MovieForm;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGenresColumns = /** @class */ (function () {
            function MovieGenresColumns() {
            }
            MovieGenresColumns.columnsKey = 'MovieDB.MovieGenres';
            return MovieGenresColumns;
        }());
        MovieDB.MovieGenresColumns = MovieGenresColumns;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGenresForm = /** @class */ (function (_super) {
            __extends(MovieGenresForm, _super);
            function MovieGenresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovieGenresForm.init) {
                    MovieGenresForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(MovieGenresForm, [
                        'MovieId', w0,
                        'GenreId', w0
                    ]);
                }
                return _this;
            }
            MovieGenresForm.formKey = 'MovieDB.MovieGenres';
            return MovieGenresForm;
        }(Serenity.PrefixedContext));
        MovieDB.MovieGenresForm = MovieGenresForm;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGenresRow;
        (function (MovieGenresRow) {
            MovieGenresRow.idProperty = 'MovieGenreId';
            MovieGenresRow.localTextPrefix = 'MovieDB.MovieGenres';
            MovieGenresRow.deletePermission = 'Administration:General';
            MovieGenresRow.insertPermission = 'Administration:General';
            MovieGenresRow.readPermission = 'Administration:General';
            MovieGenresRow.updatePermission = 'Administration:General';
        })(MovieGenresRow = MovieDB.MovieGenresRow || (MovieDB.MovieGenresRow = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGenresService;
        (function (MovieGenresService) {
            MovieGenresService.baseUrl = 'MovieDB/MovieGenres';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieGenresService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieGenresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieGenresService = MovieDB.MovieGenresService || (MovieDB.MovieGenresService = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieKind;
        (function (MovieKind) {
            MovieKind[MovieKind["Film"] = 1] = "Film";
            MovieKind[MovieKind["TvSeries"] = 2] = "TvSeries";
            MovieKind[MovieKind["MiniSeries"] = 3] = "MiniSeries";
        })(MovieKind = MovieDB.MovieKind || (MovieDB.MovieKind = {}));
        Serenity.Decorators.registerEnumType(MovieKind, 'MovieTutorial.MovieDB.MovieKind', 'MovieDB.MovieKind');
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieRow;
        (function (MovieRow) {
            MovieRow.idProperty = 'MovieId';
            MovieRow.nameProperty = 'Title';
            MovieRow.localTextPrefix = 'MovieDB.Movie';
            MovieRow.deletePermission = 'Administration:General';
            MovieRow.insertPermission = 'Administration:General';
            MovieRow.readPermission = 'Administration:General';
            MovieRow.updatePermission = 'Administration:General';
        })(MovieRow = MovieDB.MovieRow || (MovieDB.MovieRow = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieService;
        (function (MovieService) {
            MovieService.baseUrl = 'MovieDB/Movie';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieService = MovieDB.MovieService || (MovieDB.MovieService = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonColumns = /** @class */ (function () {
            function PersonColumns() {
            }
            PersonColumns.columnsKey = 'MovieDB.Person';
            return PersonColumns;
        }());
        MovieDB.PersonColumns = PersonColumns;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonForm = /** @class */ (function (_super) {
            __extends(PersonForm, _super);
            function PersonForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PersonForm.init) {
                    PersonForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EnumEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(PersonForm, [
                        'FirstName', w0,
                        'Lastname', w0,
                        'PrimaryImage', w1,
                        'GalleryImages', w2,
                        'BirthDate', w3,
                        'BirthPlace', w0,
                        'Gender', w4,
                        'Height', w5
                    ]);
                }
                return _this;
            }
            PersonForm.formKey = 'MovieDB.Person';
            return PersonForm;
        }(Serenity.PrefixedContext));
        MovieDB.PersonForm = PersonForm;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonRow;
        (function (PersonRow) {
            PersonRow.idProperty = 'PersonId';
            PersonRow.nameProperty = 'Fullname';
            PersonRow.localTextPrefix = 'MovieDB.Person';
            PersonRow.lookupKey = 'MovieDB.Person';
            function getLookup() {
                return Q.getLookup('MovieDB.Person');
            }
            PersonRow.getLookup = getLookup;
            PersonRow.deletePermission = 'Administration:General';
            PersonRow.insertPermission = 'Administration:General';
            PersonRow.readPermission = 'Administration:General';
            PersonRow.updatePermission = 'Administration:General';
        })(PersonRow = MovieDB.PersonRow || (MovieDB.PersonRow = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonService;
        (function (PersonService) {
            PersonService.baseUrl = 'MovieDB/Person';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PersonService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonService = MovieDB.PersonService || (MovieDB.PersonService = {}));
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Texts;
    (function (Texts) {
        MovieTutorial['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, MovieDB: { Genre: { GenreId: 1, Name: 1 }, Movie: { CastList: 1, Description: 1, GalleryImages: 1, GenreList: 1, Kind: 1, MovieId: 1, PrimaryImage: 1, ReleaseDate: 1, Runtime: 1, Storyline: 1, Title: 1, Year: 1 }, MovieCast: { Character: 1, MovieCastId: 1, MovieDescription: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1, PersonBirthDate: 1, PersonBirthPlace: 1, PersonFirstName: 1, PersonFullname: 1, PersonGender: 1, PersonHeight: 1, PersonId: 1, PersonLastname: 1 }, MovieGenres: { GenreId: 1, GenreName: 1, MovieDescription: 1, MovieGenreId: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1 }, Person: { BirthDate: 1, BirthPlace: 1, FirstName: 1, Fullname: 1, GalleryImages: 1, Gender: 1, Height: 1, Lastname: 1, PersonId: 1, PrimaryImage: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = MovieTutorial.Texts || (MovieTutorial.Texts = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var MovieDB;
            (function (MovieDB) {
                var Person;
                (function (Person) {
                    var PersonMovieColumns = /** @class */ (function () {
                        function PersonMovieColumns() {
                        }
                        PersonMovieColumns.columnsKey = 'MovieDB.PersonMovie';
                        return PersonMovieColumns;
                    }());
                    Person.PersonMovieColumns = PersonMovieColumns;
                })(Person = MovieDB.Person || (MovieDB.Person = {}));
            })(MovieDB = Modules.MovieDB || (Modules.MovieDB = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = MovieTutorial.Authorization || (MovieTutorial.Authorization = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = MovieTutorial.Administration || (MovieTutorial.Administration = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = MovieTutorial.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = MovieTutorial.LanguageList || (MovieTutorial.LanguageList = {}));
})(MovieTutorial || (MovieTutorial = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var MovieTutorial;
(function (MovieTutorial) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('MovieTutorial');
        Serenity.EntityDialog.defaultLanguageList = MovieTutorial.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = MovieTutorial.ScriptInitialization || (MovieTutorial.ScriptInitialization = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = MovieTutorial.Common || (MovieTutorial.Common = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n    <h2 class=\"text-center p-4\">\n        <img src=\"".concat(Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png"), "\"\n            class=\"rounded-circle p-1\" style=\"background-color: var(--s-sidebar-band-bg)\"\n            width=\"50\" height=\"50\" /> MovieTutorial\n    </h2>\n\n    <div class=\"s-Panel p-4\">\n        <h5 class=\"text-center my-4\">").concat(Q.text("Forms.Membership.Login.LoginToYourAccount"), "</h5>\n        <form id=\"~_Form\" action=\"\">\n            <div id=\"~_PropertyGrid\"></div>\n            <div class=\"px-field\">\n                <a class=\"float-end text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/ForgotPassword'), "\">\n                    ").concat(Q.text("Forms.Membership.Login.ForgotPassword"), "\n                </a>\n            </div>\n            <div class=\"px-field\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary my-3 w-100\">\n                    ").concat(Q.text("Forms.Membership.Login.SignInButton"), "\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"text-center mt-2\">\n        <a class=\"text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/SignUp'), "\">").concat(Q.text("Forms.Membership.Login.SignUpButton"), "</a>\n    </div>   \n");
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel.prototype.getTemplate = function () {
                return "<div class=\"s-Panel\">\n    <h3 class=\"page-title mb-4 text-center\">".concat(Q.text("Forms.Membership.ChangePassword.FormTitle"), "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_PropertyGrid\"></div>\n        <div class=\"px-field mt-4\">\n            <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary w-100\">\n                ").concat(Q.text("Forms.Membership.ChangePassword.SubmitButton"), "\n            </button>\n        </div>\n    </form>\n</div>");
            };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = MovieTutorial.Membership || (MovieTutorial.Membership = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreDialog = /** @class */ (function (_super) {
            __extends(GenreDialog, _super);
            function GenreDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MovieDB.GenreForm(_this.idPrefix);
                return _this;
            }
            GenreDialog.prototype.getFormKey = function () { return MovieDB.GenreForm.formKey; };
            GenreDialog.prototype.getIdProperty = function () { return MovieDB.GenreRow.idProperty; };
            GenreDialog.prototype.getLocalTextPrefix = function () { return MovieDB.GenreRow.localTextPrefix; };
            GenreDialog.prototype.getNameProperty = function () { return MovieDB.GenreRow.nameProperty; };
            GenreDialog.prototype.getService = function () { return MovieDB.GenreService.baseUrl; };
            GenreDialog.prototype.getDeletePermission = function () { return MovieDB.GenreRow.deletePermission; };
            GenreDialog.prototype.getInsertPermission = function () { return MovieDB.GenreRow.insertPermission; };
            GenreDialog.prototype.getUpdatePermission = function () { return MovieDB.GenreRow.updatePermission; };
            GenreDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GenreDialog);
            return GenreDialog;
        }(Serenity.EntityDialog));
        MovieDB.GenreDialog = GenreDialog;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreGrid = /** @class */ (function (_super) {
            __extends(GenreGrid, _super);
            function GenreGrid(container) {
                return _super.call(this, container) || this;
            }
            GenreGrid.prototype.getColumnsKey = function () { return MovieDB.GenreColumns.columnsKey; };
            GenreGrid.prototype.getDialogType = function () { return MovieDB.GenreDialog; };
            GenreGrid.prototype.getIdProperty = function () { return MovieDB.GenreRow.idProperty; };
            GenreGrid.prototype.getInsertPermission = function () { return MovieDB.GenreRow.insertPermission; };
            GenreGrid.prototype.getLocalTextPrefix = function () { return MovieDB.GenreRow.localTextPrefix; };
            GenreGrid.prototype.getService = function () { return MovieDB.GenreService.baseUrl; };
            GenreGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GenreGrid);
            return GenreGrid;
        }(Serenity.EntityGrid));
        MovieDB.GenreGrid = GenreGrid;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreListFormatter = /** @class */ (function () {
            function GenreListFormatter() {
            }
            GenreListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = MovieDB.GenreRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.Name);
                }).join(", ");
            };
            GenreListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], GenreListFormatter);
            return GenreListFormatter;
        }());
        MovieDB.GenreListFormatter = GenreListFormatter;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieDialog = /** @class */ (function (_super) {
            __extends(MovieDialog, _super);
            function MovieDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MovieDB.MovieForm(_this.idPrefix);
                return _this;
            }
            MovieDialog.prototype.getFormKey = function () { return MovieDB.MovieForm.formKey; };
            MovieDialog.prototype.getIdProperty = function () { return MovieDB.MovieRow.idProperty; };
            MovieDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieRow.localTextPrefix; };
            MovieDialog.prototype.getNameProperty = function () { return MovieDB.MovieRow.nameProperty; };
            MovieDialog.prototype.getService = function () { return MovieDB.MovieService.baseUrl; };
            MovieDialog.prototype.getDeletePermission = function () { return MovieDB.MovieRow.deletePermission; };
            MovieDialog.prototype.getInsertPermission = function () { return MovieDB.MovieRow.insertPermission; };
            MovieDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieRow.updatePermission; };
            MovieDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieDialog);
            return MovieDialog;
        }(Serenity.EntityDialog));
        MovieDB.MovieDialog = MovieDialog;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGrid = /** @class */ (function (_super) {
            __extends(MovieGrid, _super);
            function MovieGrid(container) {
                return _super.call(this, container) || this;
            }
            MovieGrid.prototype.getColumnsKey = function () { return MovieDB.MovieColumns.columnsKey; };
            MovieGrid.prototype.getDialogType = function () { return MovieDB.MovieDialog; };
            MovieGrid.prototype.getIdProperty = function () { return MovieDB.MovieRow.idProperty; };
            MovieGrid.prototype.getInsertPermission = function () { return MovieDB.MovieRow.insertPermission; };
            MovieGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieRow.localTextPrefix; };
            MovieGrid.prototype.getService = function () { return MovieDB.MovieService.baseUrl; };
            MovieGrid.prototype.getQuickSearchFields = function () {
                var txt = function (s) {
                    return Q.text("Db.".concat(MovieDB.MovieRow.localTextPrefix, ".").concat(s)).toLowerCase();
                };
                return [
                    { name: "", title: "all" },
                    { name: "Description" /* Description */, title: txt("Description" /* Description */) },
                    { name: "Storyline" /* Storyline */, title: txt("Storyline" /* Storyline */) },
                    { name: "Year" /* Year */, title: txt("Year" /* Year */) }
                ];
            };
            MovieGrid.prototype.getQuickFilters = function () {
                var items = _super.prototype.getQuickFilters.call(this);
                var genreListFilter = Q.first(items, function (x) {
                    return x.field == "GenreList" /* GenreList */;
                });
                genreListFilter.handler = function (h) {
                    var request = h.request;
                    var values = h.widget.values;
                    request.Genres = values.map(function (x) { return parseInt(x, 10); });
                    h.handled = true;
                };
                return items;
            };
            MovieGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieGrid);
            return MovieGrid;
        }(Serenity.EntityGrid));
        MovieDB.MovieGrid = MovieGrid;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastDialog = /** @class */ (function (_super) {
            __extends(MovieCastDialog, _super);
            function MovieCastDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MovieDB.MovieCastForm(_this.idPrefix);
                return _this;
            }
            MovieCastDialog.prototype.getFormKey = function () { return MovieDB.MovieCastForm.formKey; };
            MovieCastDialog.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
            MovieCastDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            MovieCastDialog.prototype.getNameProperty = function () { return MovieDB.MovieCastRow.nameProperty; };
            MovieCastDialog.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
            MovieCastDialog.prototype.getDeletePermission = function () { return MovieDB.MovieCastRow.deletePermission; };
            MovieCastDialog.prototype.getInsertPermission = function () { return MovieDB.MovieCastRow.insertPermission; };
            MovieCastDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieCastRow.updatePermission; };
            MovieCastDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieCastDialog);
            return MovieCastDialog;
        }(Serenity.EntityDialog));
        MovieDB.MovieCastDialog = MovieCastDialog;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastEditDialog = /** @class */ (function (_super) {
            __extends(MovieCastEditDialog, _super);
            function MovieCastEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new MovieDB.MovieCastForm(_this.idPrefix);
                return _this;
            }
            MovieCastEditDialog.prototype.getFormKey = function () { return MovieDB.MovieCastForm.formKey; };
            MovieCastEditDialog.prototype.getNameProperty = function () { return MovieDB.MovieCastRow.nameProperty; };
            MovieCastEditDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            MovieCastEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieCastEditDialog);
            return MovieCastEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        MovieDB.MovieCastEditDialog = MovieCastEditDialog;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastEditor = /** @class */ (function (_super) {
            __extends(MovieCastEditor, _super);
            function MovieCastEditor(container) {
                return _super.call(this, container) || this;
            }
            MovieCastEditor.prototype.getColumnsKey = function () { return "MovieDB.MovieCast"; };
            MovieCastEditor.prototype.getDialogType = function () { return MovieDB.MovieCastEditDialog; };
            MovieCastEditor.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            MovieCastEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            MovieCastEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.PersonFullname = MovieDB.PersonRow.getLookup()
                    .itemById[row.PersonId].Fullname;
                return true;
            };
            MovieCastEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MovieCastEditor);
            return MovieCastEditor;
        }(Serenity.Extensions.GridEditorBase));
        MovieDB.MovieCastEditor = MovieCastEditor;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastGrid = /** @class */ (function (_super) {
            __extends(MovieCastGrid, _super);
            function MovieCastGrid(container) {
                return _super.call(this, container) || this;
            }
            MovieCastGrid.prototype.getColumnsKey = function () { return MovieDB.MovieCastColumns.columnsKey; };
            MovieCastGrid.prototype.getDialogType = function () { return MovieDB.MovieCastDialog; };
            MovieCastGrid.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
            MovieCastGrid.prototype.getInsertPermission = function () { return MovieDB.MovieCastRow.insertPermission; };
            MovieCastGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            MovieCastGrid.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
            MovieCastGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieCastGrid);
            return MovieCastGrid;
        }(Serenity.EntityGrid));
        MovieDB.MovieCastGrid = MovieCastGrid;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGenresDialog = /** @class */ (function (_super) {
            __extends(MovieGenresDialog, _super);
            function MovieGenresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MovieDB.MovieGenresForm(_this.idPrefix);
                return _this;
            }
            MovieGenresDialog.prototype.getFormKey = function () { return MovieDB.MovieGenresForm.formKey; };
            MovieGenresDialog.prototype.getIdProperty = function () { return MovieDB.MovieGenresRow.idProperty; };
            MovieGenresDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieGenresRow.localTextPrefix; };
            MovieGenresDialog.prototype.getService = function () { return MovieDB.MovieGenresService.baseUrl; };
            MovieGenresDialog.prototype.getDeletePermission = function () { return MovieDB.MovieGenresRow.deletePermission; };
            MovieGenresDialog.prototype.getInsertPermission = function () { return MovieDB.MovieGenresRow.insertPermission; };
            MovieGenresDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieGenresRow.updatePermission; };
            MovieGenresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieGenresDialog);
            return MovieGenresDialog;
        }(Serenity.EntityDialog));
        MovieDB.MovieGenresDialog = MovieGenresDialog;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGenresGrid = /** @class */ (function (_super) {
            __extends(MovieGenresGrid, _super);
            function MovieGenresGrid(container) {
                return _super.call(this, container) || this;
            }
            MovieGenresGrid.prototype.getColumnsKey = function () { return MovieDB.MovieGenresColumns.columnsKey; };
            MovieGenresGrid.prototype.getDialogType = function () { return MovieDB.MovieGenresDialog; };
            MovieGenresGrid.prototype.getIdProperty = function () { return MovieDB.MovieGenresRow.idProperty; };
            MovieGenresGrid.prototype.getInsertPermission = function () { return MovieDB.MovieGenresRow.insertPermission; };
            MovieGenresGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieGenresRow.localTextPrefix; };
            MovieGenresGrid.prototype.getService = function () { return MovieDB.MovieGenresService.baseUrl; };
            MovieGenresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieGenresGrid);
            return MovieGenresGrid;
        }(Serenity.EntityGrid));
        MovieDB.MovieGenresGrid = MovieGenresGrid;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonDialog = /** @class */ (function (_super) {
            __extends(PersonDialog, _super);
            function PersonDialog() {
                var _this = _super.call(this) || this;
                _this.form = new MovieDB.PersonForm(_this.idPrefix);
                _this.moviesGrid = new MovieDB.PersonMovieGrid(_this.byId("MoviesGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                return _this;
            }
            PersonDialog.prototype.getFormKey = function () { return MovieDB.PersonForm.formKey; };
            PersonDialog.prototype.getIdProperty = function () { return MovieDB.PersonRow.idProperty; };
            PersonDialog.prototype.getLocalTextPrefix = function () { return MovieDB.PersonRow.localTextPrefix; };
            PersonDialog.prototype.getNameProperty = function () { return MovieDB.PersonRow.nameProperty; };
            PersonDialog.prototype.getService = function () { return MovieDB.PersonService.baseUrl; };
            PersonDialog.prototype.getTemplate = function () {
                return "<div id=\"~_Tabs\" class=\"s-DialogContent\">\n                    <ul>\n                        <li><a href=\"#~_TabInfo\"><span>Person</span></a></li>\n                        <li><a href=\"#~_TabMovies\"><span>Movies</span></a></li>\n                    </ul>\n                    <div id=\"~_TabInfo\" class=\"tab-pane s-TabInfo\">\n                        <div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n                        </div>\n                        <div class=\"s-Form\">\n                            <form id=\"~_Form\" action=\"\">\n                                <div class=\"fieldset\">\n                                    <div id=\"~_PropertyGrid\"></div>\n                                    <div class=\"clear\"></div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <div id=\"~_TabMovies\" class=\"tab-pane s-TabMovies\">\n                        <div id=\"~_MoviesGrid\">\n\n                        </div>\n                    </div>\n                </div>";
            };
            PersonDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.moviesGrid.personID = this.entityId;
            };
            PersonDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonDialog);
            return PersonDialog;
        }(Serenity.EntityDialog));
        MovieDB.PersonDialog = PersonDialog;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonGrid = /** @class */ (function (_super) {
            __extends(PersonGrid, _super);
            function PersonGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonGrid.prototype.getColumnsKey = function () { return MovieDB.PersonColumns.columnsKey; };
            PersonGrid.prototype.getDialogType = function () { return MovieDB.PersonDialog; };
            PersonGrid.prototype.getIdProperty = function () { return MovieDB.PersonRow.idProperty; };
            PersonGrid.prototype.getInsertPermission = function () { return MovieDB.PersonRow.insertPermission; };
            PersonGrid.prototype.getLocalTextPrefix = function () { return MovieDB.PersonRow.localTextPrefix; };
            PersonGrid.prototype.getService = function () { return MovieDB.PersonService.baseUrl; };
            PersonGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonGrid);
            return PersonGrid;
        }(Serenity.EntityGrid));
        MovieDB.PersonGrid = PersonGrid;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonMovieGrid = /** @class */ (function (_super) {
            __extends(PersonMovieGrid, _super);
            function PersonMovieGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonMovieGrid.prototype.getColumnsKey = function () { return "MovieDB.PersonMovie"; };
            PersonMovieGrid.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
            PersonMovieGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            PersonMovieGrid.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
            PersonMovieGrid.prototype.getButtons = function () {
                return null;
            };
            PersonMovieGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PersonMovieGrid.prototype.usePager = function () {
                return false;
            };
            PersonMovieGrid.prototype.getGridCanLoad = function () {
                return this.personID != null;
            };
            Object.defineProperty(PersonMovieGrid.prototype, "personID", {
                get: function () {
                    return this._personID;
                },
                set: function (value) {
                    if (this._personID != value) {
                        this._personID = value;
                        this.setEquality("PersonId" /* PersonId */, value);
                        this.refresh();
                    }
                },
                enumerable: false,
                configurable: true
            });
            PersonMovieGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonMovieGrid);
            return PersonMovieGrid;
        }(Serenity.EntityGrid));
        MovieDB.PersonMovieGrid = PersonMovieGrid;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUdXRvcmlhbC5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25JdGVtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVVcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpbkZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpblJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5HZW5kZXIudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5HZW5yZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5HZW5yZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5HZW5yZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLkdlbnJlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllQ2FzdENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUNhc3RGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVDYXN0Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVDYXN0U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllR2VucmVzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllR2VucmVzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllR2VucmVzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVHZW5yZXNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVLaW5kLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuUGVyc29uQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLlBlcnNvbkZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5QZXJzb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5QZXJzb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NjcmlwdFVzZXJEZWZpbml0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RleHRzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1dlYi5Nb2R1bGVzLk1vdmllREIuUGVyc29uLlBlcnNvbk1vdmllQ29sdW1ucy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1NpZGViYXJTZWFyY2gudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Mb2dpblBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvQ2hhbmdlUGFzc3dvcmQvQ2hhbmdlUGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9SZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1NpZ25VcC9TaWduVXBQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9HZW5yZS9HZW5yZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9HZW5yZS9HZW5yZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWUvR2VucmVMaXN0Rm9ybWF0dGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllL01vdmllRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllL01vdmllR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9Nb3ZpZUNhc3QvTW92aWVDYXN0RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllQ2FzdC9Nb3ZpZUNhc3RFZGl0RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllQ2FzdC9Nb3ZpZUNhc3RFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWVDYXN0L01vdmllQ2FzdEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWVHZW5yZXMvTW92aWVHZW5yZXNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWVHZW5yZXMvTW92aWVHZW5yZXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL1BlcnNvbi9QZXJzb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvUGVyc29uL1BlcnNvbkdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvUGVyc29uL1BlcnNvbk1vdmllR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLGFBQWEsQ0FJdEI7QUFKRCxXQUFVLGFBQWE7SUFBQyxJQUFBLGNBQWMsQ0FJckM7SUFKdUIsV0FBQSxjQUFjO1FBQ2xDO1lBQUE7WUFFQSxDQUFDO1lBRFUsMEJBQVUsR0FBRyx5QkFBeUIsQ0FBQztZQUNsRCxzQkFBQztTQUFBLEFBRkQsSUFFQztRQUZZLDhCQUFlLGtCQUUzQixDQUFBO0lBQ0wsQ0FBQyxFQUp1QixjQUFjLEdBQWQsNEJBQWMsS0FBZCw0QkFBYyxRQUlyQztBQUFELENBQUMsRUFKUyxhQUFhLEtBQWIsYUFBYSxRQUl0QjtBQ0pELElBQVUsYUFBYSxDQTBCdEI7QUExQkQsV0FBVSxhQUFhO0lBQUMsSUFBQSxjQUFjLENBMEJyQztJQTFCdUIsV0FBQSxjQUFjO1FBTWxDO1lBQWtDLGdDQUF3QjtZQUl0RCxzQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQWFoQjtnQkFYRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRztvQkFDckIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXpCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7d0JBQ3pCLFlBQVksRUFBRSxFQUFFO3dCQUNoQixjQUFjLEVBQUUsRUFBRTtxQkFDckIsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUFqQk0sb0JBQU8sR0FBRyx5QkFBeUIsQ0FBQztZQWtCL0MsbUJBQUM7U0FBQSxBQW5CRCxDQUFrQyxRQUFRLENBQUMsZUFBZSxHQW1CekQ7UUFuQlksMkJBQVksZUFtQnhCLENBQUE7SUFDTCxDQUFDLEVBMUJ1QixjQUFjLEdBQWQsNEJBQWMsS0FBZCw0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QUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxFQUFDLFdBQVcsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFD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b3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUZvcm0ge1xyXG4gICAgICAgIExhbmd1YWdlSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMYW5ndWFnZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTGFuZ3VhZ2VGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExhbmd1YWdlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VOYW1lID0gXCJMYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5MYW5ndWFnZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkl0ZW0ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2VUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tVGV4dD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIFNvdXJjZUxhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXNlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFVzZXJQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgR3JhbnRlZD86IGJvb2xlYW47XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25JZCA9IFwiVXNlclBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIEdyYW50ZWQgPSBcIkdyYW50ZWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogVXNlclBlcm1pc3Npb25Sb3dbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgVXNlclJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclJvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUm9sZUlkID0gXCJVc2VyUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJSb2xlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJSb2xlTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogVXNlclJvbGVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUm9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm93IHtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkSGFzaD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZFNhbHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFVzZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFVzZXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5Vc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkSGFzaCA9IFwiUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkU2FsdCA9IFwiUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgVXNlckltYWdlID0gXCJVc2VySW1hZ2VcIixcclxuICAgICAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZSA9IFwiTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgUGFzc3dvcmQgPSBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkQ29uZmlybSA9IFwiUGFzc3dvcmRDb25maXJtXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVW5kZWxldGUocmVxdWVzdDogU2VyZW5pdHkuVW5kZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlVuZGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFVuZGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VuZGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdVbmRlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDaGFuZ2VQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnT2xkUGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZvcmdvdFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGb3Jnb3RQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Mb2dpbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTG9naW5Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMb2dpbkZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMb2dpbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVzZXRQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJlc2V0UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlc2V0UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVG9rZW4/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwRm9ybSB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1FbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlNpZ25VcCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2lnblVwRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgU2lnblVwRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2lnblVwRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBlbnVtIEdlbmRlciB7XHJcbiAgICAgICAgTWFsZSA9IDEsXHJcbiAgICAgICAgRmVtYWxlID0gMlxyXG4gICAgfVxyXG4gICAgU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVudW1UeXBlKEdlbmRlciwgJ01vdmllVHV0b3JpYWwuTW92aWVEQi5HZW5kZXInLCAnTW92aWVEQi5HZW5kZXInKTtcclxufVxyXG4iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgY2xhc3MgR2VucmVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNb3ZpZURCLkdlbnJlJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHZW5yZUZvcm0ge1xyXG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgR2VucmVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNb3ZpZURCLkdlbnJlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFHZW5yZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEdlbnJlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoR2VucmVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlbnJlUm93IHtcclxuICAgICAgICBHZW5yZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBHZW5yZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnR2VucmVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuR2VucmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnTW92aWVEQi5HZW5yZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8R2VucmVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEdlbnJlUm93PignTW92aWVEQi5HZW5yZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgR2VucmVJZCA9IFwiR2VucmVJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEdlbnJlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTW92aWVEQi9HZW5yZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxHZW5yZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEdlbnJlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEdlbnJlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEdlbnJlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1vdmllREIvR2VucmUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTW92aWVEQi9HZW5yZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJNb3ZpZURCL0dlbnJlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTW92aWVEQi9HZW5yZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJNb3ZpZURCL0dlbnJlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5HZW5yZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVDYXN0Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5Nb3ZpZUNhc3QnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllQ2FzdEZvcm0ge1xyXG4gICAgICAgIFBlcnNvbklkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ2hhcmFjdGVyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01vdmllREIuTW92aWVDYXN0JztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFNb3ZpZUNhc3RGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNb3ZpZUNhc3RGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1vdmllQ2FzdEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUGVyc29uSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hhcmFjdGVyJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUNhc3RSb3cge1xyXG4gICAgICAgIE1vdmllQ2FzdElkPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVyc29uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2hhcmFjdGVyPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVN0b3J5bGluZT86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVllYXI/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVSZWxlYXNlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVJ1bnRpbWU/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVLaW5kPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcnNvbkZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25MYXN0bmFtZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25GdWxsbmFtZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25CaXJ0aERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVyc29uQmlydGhQbGFjZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25HZW5kZXI/OiBudW1iZXI7XHJcbiAgICAgICAgUGVyc29uSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTW92aWVDYXN0Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdNb3ZpZUNhc3RJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDaGFyYWN0ZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTW92aWVEQi5Nb3ZpZUNhc3QnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUNhc3RJZCA9IFwiTW92aWVDYXN0SWRcIixcclxuICAgICAgICAgICAgTW92aWVJZCA9IFwiTW92aWVJZFwiLFxyXG4gICAgICAgICAgICBQZXJzb25JZCA9IFwiUGVyc29uSWRcIixcclxuICAgICAgICAgICAgQ2hhcmFjdGVyID0gXCJDaGFyYWN0ZXJcIixcclxuICAgICAgICAgICAgTW92aWVUaXRsZSA9IFwiTW92aWVUaXRsZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZURlc2NyaXB0aW9uID0gXCJNb3ZpZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIE1vdmllU3RvcnlsaW5lID0gXCJNb3ZpZVN0b3J5bGluZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZVllYXIgPSBcIk1vdmllWWVhclwiLFxyXG4gICAgICAgICAgICBNb3ZpZVJlbGVhc2VEYXRlID0gXCJNb3ZpZVJlbGVhc2VEYXRlXCIsXHJcbiAgICAgICAgICAgIE1vdmllUnVudGltZSA9IFwiTW92aWVSdW50aW1lXCIsXHJcbiAgICAgICAgICAgIE1vdmllS2luZCA9IFwiTW92aWVLaW5kXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkZpcnN0TmFtZSA9IFwiUGVyc29uRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkxhc3RuYW1lID0gXCJQZXJzb25MYXN0bmFtZVwiLFxyXG4gICAgICAgICAgICBQZXJzb25GdWxsbmFtZSA9IFwiUGVyc29uRnVsbG5hbWVcIixcclxuICAgICAgICAgICAgUGVyc29uQmlydGhEYXRlID0gXCJQZXJzb25CaXJ0aERhdGVcIixcclxuICAgICAgICAgICAgUGVyc29uQmlydGhQbGFjZSA9IFwiUGVyc29uQmlydGhQbGFjZVwiLFxyXG4gICAgICAgICAgICBQZXJzb25HZW5kZXIgPSBcIlBlcnNvbkdlbmRlclwiLFxyXG4gICAgICAgICAgICBQZXJzb25IZWlnaHQgPSBcIlBlcnNvbkhlaWdodFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNb3ZpZUNhc3RTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNb3ZpZURCL01vdmllQ2FzdCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNb3ZpZUNhc3RSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNb3ZpZUNhc3RSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TW92aWVDYXN0Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPE1vdmllQ2FzdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNb3ZpZURCL01vdmllQ2FzdC9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJNb3ZpZURCL01vdmllQ2FzdC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJNb3ZpZURCL01vdmllQ2FzdC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1vdmllREIvTW92aWVDYXN0L1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk1vdmllREIvTW92aWVDYXN0L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Nb3ZpZUNhc3RTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5Nb3ZpZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTW92aWVGb3JtIHtcclxuICAgICAgICBUaXRsZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICBDYXN0TGlzdDogTW92aWVDYXN0RWRpdG9yO1xyXG4gICAgICAgIFByaW1hcnlJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgR2FsbGVyeUltYWdlczogU2VyZW5pdHkuTXVsdGlwbGVJbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBTdG9yeWxpbmU6IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIFllYXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUmVsZWFzZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgR2VucmVMaXN0OiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgS2luZDogU2VyZW5pdHkuRW51bUVkaXRvcjtcclxuICAgICAgICBSdW50aW1lOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01vdmllREIuTW92aWUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU1vdmllRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTW92aWVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBNb3ZpZUNhc3RFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5NdWx0aXBsZUltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc1ID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc2ID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc3ID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzggPSBzLkVudW1FZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTW92aWVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpdGxlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Nhc3RMaXN0JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW1hcnlJbWFnZScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdHYWxsZXJ5SW1hZ2VzJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0b3J5bGluZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZZWFyJywgdzUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2VEYXRlJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbnJlTGlzdCcsIHc3LFxyXG4gICAgICAgICAgICAgICAgICAgICdLaW5kJywgdzgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1J1bnRpbWUnLCB3NVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllR2VucmVzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5Nb3ZpZUdlbnJlcyc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTW92aWVHZW5yZXNGb3JtIHtcclxuICAgICAgICBNb3ZpZUlkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEdlbnJlSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllR2VucmVzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTW92aWVEQi5Nb3ZpZUdlbnJlcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTW92aWVHZW5yZXNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNb3ZpZUdlbnJlc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShNb3ZpZUdlbnJlc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTW92aWVJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdHZW5yZUlkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUdlbnJlc1JvdyB7XHJcbiAgICAgICAgTW92aWVHZW5yZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgR2VucmVJZD86IG51bWJlcjtcclxuICAgICAgICBNb3ZpZVRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVTdG9yeWxpbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVZZWFyPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllUmVsZWFzZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVSdW50aW1lPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllS2luZD86IG51bWJlcjtcclxuICAgICAgICBHZW5yZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNb3ZpZUdlbnJlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnTW92aWVHZW5yZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuTW92aWVHZW5yZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUdlbnJlSWQgPSBcIk1vdmllR2VucmVJZFwiLFxyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIEdlbnJlSWQgPSBcIkdlbnJlSWRcIixcclxuICAgICAgICAgICAgTW92aWVUaXRsZSA9IFwiTW92aWVUaXRsZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZURlc2NyaXB0aW9uID0gXCJNb3ZpZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIE1vdmllU3RvcnlsaW5lID0gXCJNb3ZpZVN0b3J5bGluZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZVllYXIgPSBcIk1vdmllWWVhclwiLFxyXG4gICAgICAgICAgICBNb3ZpZVJlbGVhc2VEYXRlID0gXCJNb3ZpZVJlbGVhc2VEYXRlXCIsXHJcbiAgICAgICAgICAgIE1vdmllUnVudGltZSA9IFwiTW92aWVSdW50aW1lXCIsXHJcbiAgICAgICAgICAgIE1vdmllS2luZCA9IFwiTW92aWVLaW5kXCIsXHJcbiAgICAgICAgICAgIEdlbnJlTmFtZSA9IFwiR2VucmVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllR2VucmVzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTW92aWVEQi9Nb3ZpZUdlbnJlcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNb3ZpZUdlbnJlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllR2VucmVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE1vdmllR2VucmVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPE1vdmllR2VucmVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1vdmllREIvTW92aWVHZW5yZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTW92aWVEQi9Nb3ZpZUdlbnJlcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJNb3ZpZURCL01vdmllR2VucmVzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTW92aWVEQi9Nb3ZpZUdlbnJlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJNb3ZpZURCL01vdmllR2VucmVzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Nb3ZpZUdlbnJlc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBlbnVtIE1vdmllS2luZCB7XHJcbiAgICAgICAgRmlsbSA9IDEsXHJcbiAgICAgICAgVHZTZXJpZXMgPSAyLFxyXG4gICAgICAgIE1pbmlTZXJpZXMgPSAzXHJcbiAgICB9XHJcbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoTW92aWVLaW5kLCAnTW92aWVUdXRvcmlhbC5Nb3ZpZURCLk1vdmllS2luZCcsICdNb3ZpZURCLk1vdmllS2luZCcpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIEdlbnJlcz86IG51bWJlcltdO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZVJvdyB7XHJcbiAgICAgICAgTW92aWVJZD86IG51bWJlcjtcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBTdG9yeWxpbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgWWVhcj86IG51bWJlcjtcclxuICAgICAgICBSZWxlYXNlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBSdW50aW1lPzogbnVtYmVyO1xyXG4gICAgICAgIEtpbmQ/OiBNb3ZpZUtpbmQ7XHJcbiAgICAgICAgR2VucmVMaXN0PzogbnVtYmVyW107XHJcbiAgICAgICAgQ2FzdExpc3Q/OiBNb3ZpZUNhc3RSb3dbXTtcclxuICAgICAgICBQcmltYXJ5SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgR2FsbGVyeUltYWdlcz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdNb3ZpZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1RpdGxlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuTW92aWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIFRpdGxlID0gXCJUaXRsZVwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgU3RvcnlsaW5lID0gXCJTdG9yeWxpbmVcIixcclxuICAgICAgICAgICAgWWVhciA9IFwiWWVhclwiLFxyXG4gICAgICAgICAgICBSZWxlYXNlRGF0ZSA9IFwiUmVsZWFzZURhdGVcIixcclxuICAgICAgICAgICAgUnVudGltZSA9IFwiUnVudGltZVwiLFxyXG4gICAgICAgICAgICBLaW5kID0gXCJLaW5kXCIsXHJcbiAgICAgICAgICAgIEdlbnJlTGlzdCA9IFwiR2VucmVMaXN0XCIsXHJcbiAgICAgICAgICAgIENhc3RMaXN0ID0gXCJDYXN0TGlzdFwiLFxyXG4gICAgICAgICAgICBQcmltYXJ5SW1hZ2UgPSBcIlByaW1hcnlJbWFnZVwiLFxyXG4gICAgICAgICAgICBHYWxsZXJ5SW1hZ2VzID0gXCJHYWxsZXJ5SW1hZ2VzXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTW92aWVEQi9Nb3ZpZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNb3ZpZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE1vdmllUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogTW92aWVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TW92aWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTW92aWVEQi9Nb3ZpZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJNb3ZpZURCL01vdmllL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk1vdmllREIvTW92aWUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNb3ZpZURCL01vdmllL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk1vdmllREIvTW92aWUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pk1vdmllU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Db2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNb3ZpZURCLlBlcnNvbic7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVyc29uRm9ybSB7XHJcbiAgICAgICAgRmlyc3ROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFzdG5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQcmltYXJ5SW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIEdhbGxlcnlJbWFnZXM6IFNlcmVuaXR5Lk11bHRpcGxlSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgQmlydGhEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEJpcnRoUGxhY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBHZW5kZXI6IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgSGVpZ2h0OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNb3ZpZURCLlBlcnNvbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUGVyc29uRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUGVyc29uRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5NdWx0aXBsZUltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc1ID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFBlcnNvbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRmlyc3ROYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3RuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW1hcnlJbWFnZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdHYWxsZXJ5SW1hZ2VzJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JpcnRoRGF0ZScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdCaXJ0aFBsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbmRlcicsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdIZWlnaHQnLCB3NVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcnNvblJvdyB7XHJcbiAgICAgICAgUGVyc29uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3RuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEJpcnRoRGF0ZT86IHN0cmluZztcclxuICAgICAgICBCaXJ0aFBsYWNlPzogc3RyaW5nO1xyXG4gICAgICAgIEdlbmRlcj86IEdlbmRlcjtcclxuICAgICAgICBIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICAgICAgRnVsbG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJpbWFyeUltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIEdhbGxlcnlJbWFnZXM/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJzb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1BlcnNvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Z1bGxuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuUGVyc29uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ01vdmllREIuUGVyc29uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxQZXJzb25Sb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFBlcnNvblJvdz4oJ01vdmllREIuUGVyc29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBQZXJzb25JZCA9IFwiUGVyc29uSWRcIixcclxuICAgICAgICAgICAgRmlyc3ROYW1lID0gXCJGaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgTGFzdG5hbWUgPSBcIkxhc3RuYW1lXCIsXHJcbiAgICAgICAgICAgIEJpcnRoRGF0ZSA9IFwiQmlydGhEYXRlXCIsXHJcbiAgICAgICAgICAgIEJpcnRoUGxhY2UgPSBcIkJpcnRoUGxhY2VcIixcclxuICAgICAgICAgICAgR2VuZGVyID0gXCJHZW5kZXJcIixcclxuICAgICAgICAgICAgSGVpZ2h0ID0gXCJIZWlnaHRcIixcclxuICAgICAgICAgICAgRnVsbG5hbWUgPSBcIkZ1bGxuYW1lXCIsXHJcbiAgICAgICAgICAgIFByaW1hcnlJbWFnZSA9IFwiUHJpbWFyeUltYWdlXCIsXHJcbiAgICAgICAgICAgIEdhbGxlcnlJbWFnZXMgPSBcIkdhbGxlcnlJbWFnZXNcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGVyc29uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTW92aWVEQi9QZXJzb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UGVyc29uUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UGVyc29uUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFBlcnNvblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxQZXJzb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTW92aWVEQi9QZXJzb24vQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTW92aWVEQi9QZXJzb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9QZXJzb24vRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNb3ZpZURCL1BlcnNvbi9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJNb3ZpZURCL1BlcnNvbi9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UGVyc29uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0VXNlckRlZmluaXRpb24ge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWRtaW4/OiBib29sZWFuO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLlRleHRzIHtcclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSBuYW1lc3BhY2UgRGIge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUm9sZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFRyYW5zbGF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21UZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5UGx1cmFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3ZlcnJpZGVDb25maXJtYXRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQ2hhbmdlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZUxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkU2FsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIE1vdmllREIge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEdlbnJlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5yZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTW92aWUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhc3RMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHYWxsZXJ5SW1hZ2VzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcmltYXJ5SW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdG9yeWxpbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE1vdmllQ2FzdCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVDYXN0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUmVsZWFzZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVN0b3J5bGluZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25CaXJ0aERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25CaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25HZW5kZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25IZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcnNvbkxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNb3ZpZUdlbnJlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbnJlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUdlbnJlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVLaW5kOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUnVudGltZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllU3RvcnlsaW5lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllWWVhcjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUGVyc29uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHYWxsZXJ5SW1hZ2VzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSGVpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByaW1hcnlJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBkZWNsYXJlIG5hbWVzcGFjZSBGb3JtcyB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNZW1iZXJzaGlwIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRm9yZ290UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMb2dpbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmFjZWJvb2tCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdvb2dsZUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2luVG9Zb3VyQWNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9SOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVtZW1iZXJNZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25JbkJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25VcEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBTaWduVXAge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjY2VwdFRlcm1zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGVFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IExvZ291dExpbms6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlY2xhcmUgbmFtZXNwYWNlIFNpdGUge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWNjZXNzRGVuaWVkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9DaGFuZ2VVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhY2tQZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90TG9nZ2VkSW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJhc2ljUHJvZ3Jlc3NEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsZWFzZVdhaXQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCdWxrU2VydmljZUFjdGlvbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbFN1Y2Nlc3NGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvbkZvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90aGluZ1RvUHJvY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU29tZUhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzc0NvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIExheW91dCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckluZm86IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlclJpZ2h0czogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZXJhbFNldHRpbmdzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2s6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2tMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbkxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvd0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlckRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0UGVybWlzc2lvbnNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRSb2xlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUmV2b2tlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFZhbGlkYXRpb25FcnJvciB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSBuYW1lc3BhY2UgVmFsaWRhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uRXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ2FudEZpbmRVc2VyV2l0aEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZUZvcmVpZ25LZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbENvbmZpcm06IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxJblVzZTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkQWN0aXZhdGVUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkUmVzZXRUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVQcmltYXJ5S2V5RXJyb3I6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBNb3ZpZVR1dG9yaWFsWydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7TGFuZ3VhZ2U6e0lkOjEsTGFuZ3VhZ2VJZDoxLExhbmd1YWdlTmFtZToxfSxSb2xlOntSb2xlSWQ6MSxSb2xlTmFtZToxfSxSb2xlUGVybWlzc2lvbjp7UGVybWlzc2lvbktleToxLFJvbGVJZDoxLFJvbGVQZXJtaXNzaW9uSWQ6MSxSb2xlUm9sZU5hbWU6MX0sVHJhbnNsYXRpb246e0N1c3RvbVRleHQ6MSxFbnRpdHlQbHVyYWw6MSxLZXk6MSxPdmVycmlkZUNvbmZpcm1hdGlvbjoxLFNhdmVDaGFuZ2VzQnV0dG9uOjEsU291cmNlTGFuZ3VhZ2U6MSxTb3VyY2VUZXh0OjEsVGFyZ2V0TGFuZ3VhZ2U6MSxUYXJnZXRUZXh0OjF9LFVzZXI6e0Rpc3BsYXlOYW1lOjEsRW1haWw6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sTW92aWVEQjp7R2VucmU6e0dlbnJlSWQ6MSxOYW1lOjF9LE1vdmllOntDYXN0TGlzdDoxLERlc2NyaXB0aW9uOjEsR2FsbGVyeUltYWdlczoxLEdlbnJlTGlzdDoxLEtpbmQ6MSxNb3ZpZUlkOjEsUHJpbWFyeUltYWdlOjEsUmVsZWFzZURhdGU6MSxSdW50aW1lOjEsU3RvcnlsaW5lOjEsVGl0bGU6MSxZZWFyOjF9LE1vdmllQ2FzdDp7Q2hhcmFjdGVyOjEsTW92aWVDYXN0SWQ6MSxNb3ZpZURlc2NyaXB0aW9uOjEsTW92aWVJZDoxLE1vdmllS2luZDoxLE1vdmllUmVsZWFzZURhdGU6MSxNb3ZpZVJ1bnRpbWU6MSxNb3ZpZVN0b3J5bGluZToxLE1vdmllVGl0bGU6MSxNb3ZpZVllYXI6MSxQZXJzb25CaXJ0aERhdGU6MSxQZXJzb25CaXJ0aFBsYWNlOjEsUGVyc29uRmlyc3ROYW1lOjEsUGVyc29uRnVsbG5hbWU6MSxQZXJzb25HZW5kZXI6MSxQZXJzb25IZWlnaHQ6MSxQZXJzb25JZDoxLFBlcnNvbkxhc3RuYW1lOjF9LE1vdmllR2VucmVzOntHZW5yZUlkOjEsR2VucmVOYW1lOjEsTW92aWVEZXNjcmlwdGlvbjoxLE1vdmllR2VucmVJZDoxLE1vdmllSWQ6MSxNb3ZpZUtpbmQ6MSxNb3ZpZVJlbGVhc2VEYXRlOjEsTW92aWVSdW50aW1lOjEsTW92aWVTdG9yeWxpbmU6MSxNb3ZpZVRpdGxlOjEsTW92aWVZZWFyOjF9LFBlcnNvbjp7QmlydGhEYXRlOjEsQmlydGhQbGFjZToxLEZpcnN0TmFtZToxLEZ1bGxuYW1lOjEsR2FsbGVyeUltYWdlczoxLEdlbmRlcjoxLEhlaWdodDoxLExhc3RuYW1lOjEsUGVyc29uSWQ6MSxQcmltYXJ5SW1hZ2U6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsR29vZ2xlQnV0dG9uOjEsTG9naW5Ub1lvdXJBY2NvdW50OjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxOYXZpZ2F0aW9uOntMb2dvdXRMaW5rOjEsU2l0ZVRpdGxlOjF9LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSkgYXMgYW55O1xyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb2R1bGVzLk1vdmllREIuUGVyc29uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Nb3ZpZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01vdmllREIuUGVyc29uTW92aWUnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMYW5ndWFnZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBMYW5ndWFnZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLkxhbmd1YWdlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIExhbmd1YWdlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0xhbmd1YWdlUm93LkZpZWxkcy5MYW5ndWFnZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUm9sZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJvbGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRWRpdEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJvbGVQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZUlEOiB0aGlzLmVudGl0eS5Sb2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmVudGl0eS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uUm9sZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSb2xlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1JvbGVSb3cuRmllbGRzLlJvbGVOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZVBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8Um9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+ICg8VXNlclBlcm1pc3Npb25Sb3c+eyBQZXJtaXNzaW9uS2V5OiB4IH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHguUGVybWlzc2lvbktleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VHJhbnNsYXRpb25JdGVtLCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUcmFuc2xhdGlvblNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGhhc0NoYW5nZXM6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBzb3VyY2VMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yOyBcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZUtleTogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKCdrZXl1cC4nICsgdGhpcy51bmlxdWVOYW1lICsgJyBjaGFuZ2UuJyArIHRoaXMudW5pcXVlTmFtZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dC5jdXN0b20tdGV4dCcsIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gUS50cmltVG9OdWxsKCQoZS50YXJnZXQpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoJChlLnRhcmdldCkuZGF0YSgna2V5JykpLkN1c3RvbVRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgIGxldCBkb25lOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdzb3VyY2UtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5Tb3VyY2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlNvdXJjZVRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygndGFyZ2V0LXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5UYXJnZXRUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlRhcmdldFRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zOiBTbGljay5Db2x1bW5bXSA9IFtdO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goeyBmaWVsZDogJ0tleScsIHdpZHRoOiAzMDAsIHNvcnRhYmxlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1NvdXJjZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc291cmNlLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdDdXN0b21UZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8aW5wdXQvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjdXN0b20tdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgY3R4LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWtleScsIGN0eC5pdGVtLktleSkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGFyZ2V0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd0YXJnZXQtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcHQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBsb29rdXBLZXk6ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5Tb3VyY2VMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlRhcmdldExhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUNoYW5nZXMobGFuZ3VhZ2U6IHN0cmluZyk6IFByb21pc2VMaWtlPGFueT4ge1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnNbaXRlbS5LZXldID0gaXRlbS5DdXN0b21UZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFRyYW5zbGF0aW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRDogbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc1xyXG4gICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gUS50cmltVG9OdWxsKGxhbmd1YWdlKSB8fCAnaW52YXJpYW50JztcclxuICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcygnVXNlciB0cmFuc2xhdGlvbnMgaW4gXCInICsgbGFuZ3VhZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICdcIiBsYW5ndWFnZSBhcmUgc2F2ZWQgdG8gXCJ1c2VyLnRleHRzLicgK1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlICsgJy5qc29uXCIgJyArICdmaWxlIHVuZGVyIFwifi9BcHBfRGF0YS90ZXh0cy9cIicsICcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3U3VibWl0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMudmlldy5wYXJhbXM7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU291cmNlTGFuZ3VhZ2VJRCA9IHRoaXMuc291cmNlTGFuZ3VhZ2UudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkgPSB0aGlzLnRhcmdldExhbmd1YWdlLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlRhcmdldExhbmd1YWdlSUQgPSB0aGlzLnRhcmdldExhbmd1YWdlS2V5O1xyXG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld1N1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU2F2ZUNoYW5nZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGUgPT4gdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYXBwbHktY2hhbmdlcy1idXR0b24nXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLCBzZWFyY2hUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW06IFRyYW5zbGF0aW9uSXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3M7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hpbmcgPSBzZCh0aGlzLnNlYXJjaFRleHQpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtYXRjaChzdHI6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaGluZykgPj0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFEuaXNFbXB0eU9yTnVsbChzZWFyY2hpbmcpIHx8IG1hdGNoKGl0ZW0uS2V5KSB8fCBtYXRjaChpdGVtLlNvdXJjZVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICBtYXRjaChpdGVtLlRhcmdldFRleHQpIHx8IG1hdGNoKGl0ZW0uQ3VzdG9tVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVzZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgIT0gdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmRzIGVudGVyZWQgZG9lc24ndCBtYXRjaCFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1yb2xlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXVzZXJzIHRleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdlZGl0LXJvbGVzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVzZSBmaWVsZHMgYXJlIG9ubHkgcmVxdWlyZWQgaW4gbmV3IHJlY29yZCBtb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Vc2VyXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFVzZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtVc2VyUm93LkZpZWxkcy5Vc2VybmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQXV0aG9yaXphdGlvbiB7XHJcbiAgICBleHBvcnQgZGVjbGFyZSBsZXQgdXNlckRlZmluaXRpb246IFNjcmlwdFVzZXJEZWZpbml0aW9uO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRob3JpemF0aW9uLCAndXNlckRlZmluaXRpb24nLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldFJlbW90ZURhdGEoJ1VzZXJEYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXkpO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBleHBvcnQgY2xhc3MgUGVybWlzc2lvbkNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRGF0YUdyaWQ8UGVybWlzc2lvbkNoZWNrSXRlbSwgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBieVBhcmVudEtleTogUS5Hcm91cGluZzxQZXJtaXNzaW9uQ2hlY2tJdGVtPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBlcm1pc3Npb25LZXlzID0gdGhpcy5nZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwZXJtaXNzaW9uS2V5cy5tYXAoa2V5ID0+IDxQZXJtaXNzaW9uQ2hlY2tJdGVtPntcclxuICAgICAgICAgICAgICAgIEtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgUGFyZW50S2V5OiB0aGlzLmdldFBhcmVudEtleShrZXkpLFxyXG4gICAgICAgICAgICAgICAgVGl0bGU6IHRpdGxlQnlLZXlba2V5XSxcclxuICAgICAgICAgICAgICAgIEdyYW50UmV2b2tlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgSXNHcm91cDoga2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlQYXJlbnRLZXkgPSBRLnRvR3JvdXBpbmcoaXRlbXMsIHggPT4geC5QYXJlbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZ3JhbnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoaXRlbS5HcmFudFJldm9rZSA9PT0gZ3JhbnQpID8gJyBjaGVja2VkJyA6ICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGRlc2MuZmlsdGVyKHggPT4geC5HcmFudFJldm9rZSA9PT0gZ3JhbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVzYy5sZW5ndGggPT09IGdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQgcGFydGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJvbGVPckltcGxpY2l0KGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9sZVBlcm1pc3Npb25zW2tleV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uR3JhbnRSZXZva2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFudENvdW50ID0gUS5jb3VudChkZXNjLCB4ID0+IHguR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAoeC5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoeC5LZXkpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IGRlc2MubGVuZ3RoIHx8IGRlc2MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhbGxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbnknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAncGFydGlhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gaXRlbS5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KGl0ZW0uS2V5KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGdyYW50ZWQgPyAnIGFsbG93JyA6ICcgZGVueScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlBlcm1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTZXJlbml0eS5TbGlja0Zvcm1hdHRpbmcudHJlZVRvZ2dsZSgoKSA9PiB0aGlzLnZpZXcsIHggPT4geC5LZXksIGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MgPSB0aGlzLmdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZWZmZWN0aXZlLXBlcm1pc3Npb24gJyArIGtsYXNzICsgJ1wiPicgKyBRLmh0bWxFbmNvZGUoY3R4LnZhbHVlKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuR3JhbnQnKSwgZmllbGQ6ICdHcmFudCcsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMSA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdjaGVjay1ib3ggZ3JhbnQgbm8tZmxvYXQgXCIgKyBrbGFzczEgKyBcIic+PC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Jldm9rZSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUmV2b2tlJyksIGZpZWxkOiAnUmV2b2tlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MyID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiY2hlY2stYm94IHJldm9rZSBuby1mbG9hdCAnICsga2xhc3MyICsgJ1wiPjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXM6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSk6IHZvaWQge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuc2V0SW5kZW50cyhpdGVtcywgeCA9PiB4LktleSwgeCA9PiB4LlBhcmVudEtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLmZpbHRlckJ5SWQoaXRlbSwgdGhpcy52aWV3LCB4ID0+IHguUGFyZW50S2V5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQ29udGFpbnMoaXRlbSkgfHwgaXRlbS5Jc0dyb3VwICYmIFEuYW55KHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgZmFsc2UpLCB4ID0+IHRoaXMubWF0Y2hDb250YWlucyh4KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtYXRjaENvbnRhaW5zKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS5UaXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0RGVzY2VuZGFudHMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZXhjbHVkZUdyb3VwczogYm9vbGVhbik6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3RhY2sgPSBbaXRlbV07XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ieVBhcmVudEtleVtpLktleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlR3JvdXBzIHx8ICFjaGlsZC5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZSwgcm93LCBjZWxsKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnRvZ2dsZUNsaWNrKGUsIHJvdywgY2VsbCwgdGhpcy52aWV3LCB4ID0+IHguS2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnQgPSB0YXJnZXQuaGFzQ2xhc3MoJ2dyYW50Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JhbnQgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdyZXZva2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkT3JQYXJ0aWFsID0gdGFyZ2V0Lmhhc0NsYXNzKCdjaGVja2VkJykgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdwYXJ0aWFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRPclBhcnRpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IGdyYW50ICE9PSBjaGVja2VkT3JQYXJ0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkIG9mIHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5HcmFudFJldm9rZSA9IGdyYW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlja0dyaWQuaW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBhcmVudEtleShrZXkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpZHggPSBrZXkubGFzdEluZGV4T2YoJzonKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLnRyaW1Ub051bGwodGV4dCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPik6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSA8c3RyaW5nW10+US5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cycpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVXaXRoR3JvdXAgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KHMubGVuZ3RoIC0gMSkgPT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVCeUtleVtzXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbc10gPSBRLmNvYWxlc2NlKFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgcyksIHMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGdyb3VwICsgcGFydHNbaV0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVCeUtleVtncm91cF0gPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaXRsZSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W2dyb3VwXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtncm91cF0gPSBncm91cFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW3NdID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAga2V5cyA9IGtleXMuc29ydCgoeCwgeSkgPT4gUS50dXJraXNoTG9jYWxlQ29tcGFyZSh0aXRsZVdpdGhHcm91cFt4XSwgdGl0bGVXaXRoR3JvdXBbeV0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlKCk6IFVzZXJQZXJtaXNzaW9uUm93W10ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogVXNlclBlcm1pc3Npb25Sb3dbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uR3JhbnRSZXZva2UgIT0gbnVsbCAmJiBpdGVtLktleS5jaGFyQXQoaXRlbS5LZXkubGVuZ3RoIC0gMSkgIT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBQZXJtaXNzaW9uS2V5OiBpdGVtLktleSwgR3JhbnRlZDogaXRlbS5HcmFudFJldm9rZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZSh2YWx1ZTogVXNlclBlcm1pc3Npb25Sb3dbXSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChyb3cuUGVybWlzc2lvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5HcmFudFJldm9rZSA9IFEuY29hbGVzY2Uocm93LkdyYW50ZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcm9sZVBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICAgICAgZ2V0IHJvbGVQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHJvbGVQZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnNba10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pbXBsaWNpdFBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8US5EaWN0aW9uYXJ5PGJvb2xlYW4+PiA9IHt9O1xyXG5cclxuICAgICAgICBzZXQgaW1wbGljaXRQZXJtaXNzaW9ucyh2YWx1ZTogUS5EaWN0aW9uYXJ5PHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB2YWx1ZVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIG9mIGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdW3NdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zIHtcclxuICAgICAgICBzaG93UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0l0ZW0ge1xyXG4gICAgICAgIFBhcmVudEtleT86IHN0cmluZztcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNHcm91cD86IGJvb2xlYW47XHJcbiAgICAgICAgR3JhbnRSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0Um9sZVBlcm1pc3Npb25zKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5yb2xlUGVybWlzc2lvbnMgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkNoZWNrVHJlZUVkaXRvcjxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4sIGFueT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGl2OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3ModGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUcmVlSXRlbXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSb2xlUm93LmdldExvb2t1cCgpLml0ZW1zLm1hcChyb2xlID0+IDxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJvbGUuUm9sZUlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByb2xlLlJvbGVOYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkgJiZcclxuICAgICAgICAgICAgICAgIChRLmlzRW1wdHlPck51bGwodGhpcy5zZWFyY2hUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS50ZXh0IHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJSb2xlRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBSb2xlQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclJvbGVEaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFJvbGVDaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1JvbGVzJykpO1xyXG5cclxuICAgICAgICAgICAgVXNlclJvbGVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklEXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuc2VydmljZVJlcXVlc3QoJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuU2F2ZVN1Y2Nlc3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuRGlhbG9nVGl0bGUnKSwgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD0nfl9Sb2xlcyc+PC9kaXY+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVEaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ6IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiBBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy5nZXRMb29rdXAoKS5pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoay5MYW5ndWFnZUlkICE9PSAnZW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbay5JZC50b1N0cmluZygpLCBrLkxhbmd1YWdlTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5TY3JpcHRJbml0aWFsaXphdGlvbiB7XHJcbiAgICBRLkNvbmZpZy5yZXNwb25zaXZlRGlhbG9ncyA9IHRydWU7XHJcbiAgICBRLkNvbmZpZy5yb290TmFtZXNwYWNlcy5wdXNoKCdNb3ZpZVR1dG9yaWFsJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuICAgIFNlcmVuaXR5Lkh0bWxDb250ZW50RWRpdG9yLkNLRWRpdG9yQmFzZVBhdGggPSBcIn4vU2VyZW5pdHkuQXNzZXRzL1NjcmlwdHMvY2tlZGl0b3IvXCI7XHJcblxyXG4gICAgaWYgKCQuZm5bJ2NvbG9yYm94J10pIHtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heFdpZHRoID0gXCI5NSVcIjtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heEhlaWdodCA9IFwiOTUlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBRLkVycm9ySGFuZGxpbmcucnVudGltZUVycm9ySGFuZGxlcjtcclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2lkZWJhclNlYXJjaCBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBwcml2YXRlIG1lbnVVTDogSlF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihpbnB1dDogSlF1ZXJ5LCBtZW51VUw6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgU2VyZW5pdHkuUXVpY2tTZWFyY2hJbnB1dChpbnB1dCwge1xyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g6IChmaWVsZCwgdGV4dCwgc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0Y2hGbGFncyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVudVVMID0gbWVudVVMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZU1hdGNoRmxhZ3ModGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUxpc3QgPSB0aGlzLm1lbnVVTC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSB0ZXh0LnJlcGxhY2UoJywnLCAnICcpLnNwbGl0KCcgJykuZmlsdGVyKHggPT4gIVEuaXNUcmltbWVkRW1wdHkoeCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBRLnRyaW1Ub051bGwoU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhwYXJ0c1tpXSkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGxpTGlzdDtcclxuICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbiAoaWR4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9ICQoZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEuY29hbGVzY2UoeC50ZXh0KCksICcnKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsICYmICEodGl0bGUuaW5kZXhPZihwKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSBpdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aXNpYmxlcyA9IG1hdGNoaW5nSXRlbXMucGFyZW50cygnbGknKS5hZGQobWF0Y2hpbmdJdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9uVmlzaWJsZXMgPSBsaUxpc3Qubm90KHZpc2libGVzKTtcclxuICAgICAgICAgICAgbm9uVmlzaWJsZXMuaGlkZSgpLmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgbGlMaXN0LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPExvZ2luUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTG9naW5Gb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnTG9naW5CdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHAtNFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9pbWFnZXMvc2VyZW5pdHktbG9nby13LTEyOC5wbmdcIil9XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBwLTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHZhcigtLXMtc2lkZWJhci1iYW5kLWJnKVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIC8+IE1vdmllVHV0b3JpYWxcclxuICAgIDwvaDI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInMtUGFuZWwgcC00XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktNFwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Mb2dpblRvWW91ckFjY291bnRcIil9PC9oNT5cclxuICAgICAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LWVuZCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcmdvdFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9Mb2dpbkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBteS0zIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25JbkJ1dHRvblwiKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKX1cIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnblVwQnV0dG9uXCIpfTwvYT5cclxuICAgIDwvZGl2PiAgIFxyXG5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPENoYW5nZVBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2hhbmdlUGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBDaGFuZ2VQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgQ2hhbmdlUGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLncoJ0NvbmZpcm1QYXNzd29yZCcsIFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yKS52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0NoYW5nZVBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInMtUGFuZWxcIj5cclxuICAgIDxoMyBjbGFzcz1cInBhZ2UtdGl0bGUgbWItNCB0ZXh0LWNlbnRlclwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5Gb3JtVGl0bGVcIil9PC9oMz5cclxuICAgIDxmb3JtIGlkPVwifl9Gb3JtXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkIG10LTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fU3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuU3VibWl0QnV0dG9uXCIpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxGb3Jnb3RQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZvcmdvdFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogRm9yZ290UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcmdvdFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8UmVzZXRQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlc2V0UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBSZXNldFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBSZXNldFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlRva2VuID0gdGhpcy5ieUlkKCdUb2tlbicpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9SZXNldFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuUmVzZXRQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8U2lnblVwUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU2lnblVwRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogU2lnblVwRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBTaWduVXBGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1FbWFpbC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtRW1haWwudmFsdWUgIT09IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uRW1haWxDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXlOYW1lOiB0aGlzLmZvcm0uRGlzcGxheU5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB0aGlzLmZvcm0uRW1haWwudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5TaWduVXAuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgR2VucmVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8R2VucmVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gR2VucmVGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEdlbnJlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gR2VucmVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEdlbnJlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gR2VucmVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEdlbnJlUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEdlbnJlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEdlbnJlUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgR2VucmVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEdlbnJlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEdlbnJlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBHZW5yZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBHZW5yZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEdlbnJlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJGb3JtYXR0ZXIoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdlbnJlTGlzdEZvcm1hdHRlciBpbXBsZW1lbnRzIFNsaWNrLkZvcm1hdHRlciB7XHJcbiAgICAgICAgZm9ybWF0KGN0eDogU2xpY2suRm9ybWF0dGVyQ29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgaWRMaXN0ID0gY3R4LnZhbHVlIGFzIG51bWJlcltdO1xyXG4gICAgICAgICAgICBpZiAoIWlkTGlzdCB8fCAhaWRMaXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ5SWQgPSBHZW5yZVJvdy5nZXRMb29rdXAoKS5pdGVtQnlJZDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpZExpc3QubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGcgPSBieUlkW3hdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuaHRtbEVuY29kZShnLk5hbWUpO1xyXG4gICAgICAgICAgICB9KS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE1vdmllUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE1vdmllRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE1vdmllRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQlxyXG57XHJcbiAgICBpbXBvcnQgZmxkID0gTW92aWVSb3cuRmllbGRzO1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNb3ZpZVJvdywgYW55PlxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gTW92aWVDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIE1vdmllRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTW92aWVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRRdWlja1NlYXJjaEZpZWxkcygpOiBTZXJlbml0eS5RdWlja1NlYXJjaEZpZWxkW10ge1xyXG4gICAgICAgICAgICBjb25zdCB0eHQgPSAocykgPT5cclxuICAgICAgICAgICAgICAgIFEudGV4dChgRGIuJHtNb3ZpZVJvdy5sb2NhbFRleHRQcmVmaXh9LiR7c31gKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIlwiLCB0aXRsZTogXCJhbGxcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBmbGQuRGVzY3JpcHRpb24sIHRpdGxlOiB0eHQoZmxkLkRlc2NyaXB0aW9uKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBmbGQuU3RvcnlsaW5lLCB0aXRsZTogdHh0KGZsZC5TdG9yeWxpbmUpIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGZsZC5ZZWFyLCB0aXRsZTogdHh0KGZsZC5ZZWFyKSB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UXVpY2tGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdlbnJlTGlzdEZpbHRlciA9IFEuZmlyc3QoaXRlbXMsIHggPT5cclxuICAgICAgICAgICAgICAgIHguZmllbGQgPT0gTW92aWVSb3cuRmllbGRzLkdlbnJlTGlzdCk7XHJcblxyXG4gICAgICAgICAgICBnZW5yZUxpc3RGaWx0ZXIuaGFuZGxlciA9IGggPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IChoLnJlcXVlc3QgYXMgTW92aWVMaXN0UmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSAoaC53aWRnZXQgYXMgU2VyZW5pdHkuTG9va3VwRWRpdG9yKS52YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LkdlbnJlcyA9IHZhbHVlcy5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpO1xyXG4gICAgICAgICAgICAgICAgaC5oYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxNb3ZpZUNhc3RSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTW92aWVDYXN0Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllQ2FzdFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBNb3ZpZUNhc3RGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdEVkaXREaWFsb2cgZXh0ZW5kc1xyXG4gICAgICAgIFNlcmVuaXR5LkV4dGVuc2lvbnMuR3JpZEVkaXRvckRpYWxvZzxNb3ZpZUNhc3RSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE1vdmllQ2FzdEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm06IE1vdmllQ2FzdEZvcm0gPSBuZXcgTW92aWVDYXN0Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVDYXN0RWRpdG9yXHJcbiAgICAgICAgZXh0ZW5kcyBTZXJlbml0eS5FeHRlbnNpb25zLkdyaWRFZGl0b3JCYXNlPE1vdmllQ2FzdFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJNb3ZpZURCLk1vdmllQ2FzdFwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNb3ZpZUNhc3RFZGl0RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBZGRCdXR0b25DYXB0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJBZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IE1vdmllQ2FzdFJvdywgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLnZhbGlkYXRlRW50aXR5KHJvdywgaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgXHJcblxyXG4gICAgICAgICAgICByb3cuUGVyc29uRnVsbG5hbWUgPSBQZXJzb25Sb3cuZ2V0TG9va3VwKClcclxuICAgICAgICAgICAgICAgIC5pdGVtQnlJZFtyb3cuUGVyc29uSWRdLkZ1bGxuYW1lO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPE1vdmllQ2FzdFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBNb3ZpZUNhc3RDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIE1vdmllQ2FzdERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllQ2FzdFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUdlbnJlc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxNb3ZpZUdlbnJlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNb3ZpZUdlbnJlc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVHZW5yZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZUdlbnJlc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllR2VucmVzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZUdlbnJlc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZUdlbnJlc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZUdlbnJlc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE1vdmllR2VucmVzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVHZW5yZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNb3ZpZUdlbnJlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBNb3ZpZUdlbnJlc0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTW92aWVHZW5yZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTW92aWVHZW5yZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNb3ZpZUdlbnJlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UGVyc29uUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFBlcnNvbkZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUGVyc29uUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUGVyc29uUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBQZXJzb25Sb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQZXJzb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUGVyc29uRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtb3ZpZXNHcmlkOiBQZXJzb25Nb3ZpZUdyaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZpZXNHcmlkID0gbmV3IFBlcnNvbk1vdmllR3JpZCh0aGlzLmJ5SWQoXCJNb3ZpZXNHcmlkXCIpKTtcclxuICAgICAgICAgICAgdGhpcy50YWJzLm9uKCd0YWJzYWN0aXZhdGUnLCAoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJhbmdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgaWQ9XCJ+X1RhYnNcIiBjbGFzcz1cInMtRGlhbG9nQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjfl9UYWJJbmZvXCI+PHNwYW4+UGVyc29uPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiN+X1RhYk1vdmllc1wiPjxzcGFuPk1vdmllczwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1RhYkluZm9cIiBjbGFzcz1cInRhYi1wYW5lIHMtVGFiSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9Ub29sYmFyXCIgY2xhc3M9XCJzLURpYWxvZ1Rvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzLUZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwifl9Gb3JtXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIn5fVGFiTW92aWVzXCIgY2xhc3M9XCJ0YWItcGFuZSBzLVRhYk1vdmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9Nb3ZpZXNHcmlkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92aWVzR3JpZC5wZXJzb25JRCA9IHRoaXMuZW50aXR5SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcnNvbkdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFBlcnNvblJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBQZXJzb25Db2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFBlcnNvbkRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUGVyc29uUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFBlcnNvblJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFBlcnNvblJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFBlcnNvblNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcnNvbk1vdmllR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TW92aWVDYXN0Um93LCBhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIk1vdmllREIuUGVyc29uTW92aWVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTW92aWVDYXN0U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEdyaWRDYW5Mb2FkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJzb25JRCAhPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcGVyc29uSUQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgZ2V0IHBlcnNvbklEKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGVyc29uSUQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgcGVyc29uSUQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGVyc29uSUQgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNvbklEID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVxdWFsaXR5KE1vdmllQ2FzdFJvdy5GaWVsZHMuUGVyc29uSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19