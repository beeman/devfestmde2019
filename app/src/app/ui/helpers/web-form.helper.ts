import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';

export class WebFormHelper implements FormlyFieldConfig {
  public static map(f: string) {
    const map = {
      input: WebFormHelper.input,
      email: WebFormHelper.email,
      password: WebFormHelper.password,
      number: WebFormHelper.number,
      checkbox: WebFormHelper.checkbox,
      radio: WebFormHelper.radio,
      select: WebFormHelper.select,
      textarea: WebFormHelper.textarea,
      group: WebFormHelper.group,
      template: WebFormHelper.template,
      date: WebFormHelper.date,
      time: WebFormHelper.time,
    };
    return map[f] ? map[f] : WebFormHelper.input;
  }

  public static field(
    type: string,
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return {
      type,
      key,
      templateOptions,
      ...options,
    };
  }

  public static input(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return WebFormHelper.field('input', key, templateOptions, options);
  }

  public static email(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    const defaults = {
      type: 'email',
      label: 'Email',
    };
    const defaultOptions = { validators: { validation: ['email'] } };

    return WebFormHelper.input(
      key,
      { ...templateOptions, ...defaults },
      { ...options, ...defaultOptions },
    );
  }

  public static password(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    const defaults = {
      label: 'Password',
      type: 'password',
      minLength: 8,
      required: true,
    };

    return WebFormHelper.input(
      key,
      { ...templateOptions, ...defaults },
      options,
    );
  }

  public static number(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return WebFormHelper.input(
      key,
      { ...templateOptions, type: 'number' },
      { ...options },
    );
  }

  public static checkbox(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return WebFormHelper.field('checkbox', key, templateOptions, options);
  }

  public static radio(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return WebFormHelper.field('radio', key, templateOptions, options);
  }

  public static select(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return WebFormHelper.field(
      'select',
      key,
      templateOptions,
      options,
    );
  }

  public static textarea(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    const defaultTemplateOptions = { rows: 5 };

    return WebFormHelper.field(
      'textarea',
      key,
      {...defaultTemplateOptions, ...templateOptions},
      options,
    );
  }

  public static group(
    fieldGroupClassName: string,
    fieldGroup: FormlyFieldConfig[],
  ): FormlyFieldConfig {
    return { fieldGroupClassName, fieldGroup };
  }

  public static template(template: string): FormlyFieldConfig {
    return { type: 'formly-template', template };
  }

  public static date(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return WebFormHelper.input(
      key,
      { ...templateOptions, type: 'date' },
      { ...options },
    );
  }

  public static time(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return WebFormHelper.input(
      key,
      { ...templateOptions, type: 'time' },
      { ...options },
    );
  }

}
