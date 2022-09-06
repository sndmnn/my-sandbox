import { TransformableInfo } from 'logform';
import { format } from 'winston';
import fastRedact from 'fast-redact';

type RedactSensitiveFormatOptions = {
  /**
   * An array of strings that will be used to match against keys inside `infoObject` (nested objects will be affected). If a match is found, the value of the key will be replaced with `redactLabel`.
   */
  redactKeys: string[];

  /**
   * A string that will be used to replace the value of any key that matches the `redactKeys` array.
   * @default '**REDACTED**'
   */
  redactLabel?: string;
};

/**
 * A winston format that redacts sensitive information from the `infoObject`.
 */
const redactSensitive = format((info, opts: RedactSensitiveFormatOptions) => {
  const redact = fastRedact({
    censor: opts.redactLabel || '*[Redacted]*',
    paths: opts.redactKeys,
  });

  const redactedInfo = JSON.parse(redact(info) as string) as TransformableInfo;

  return Object.assign(info, redactedInfo);
});

export default redactSensitive;
