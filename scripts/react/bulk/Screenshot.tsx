import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgScreenshot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M4.64 2.284c-1.044.135-1.904.854-2.254 1.884a3.428 3.428 0 0 0-.104.517c-.058.459-.056 4.207.002 4.477.163.758 1.269.758 1.432 0 .029-.135.044-.922.044-2.302 0-2.028.003-2.104.083-2.32a1.28 1.28 0 0 1 .697-.697c.216-.08.292-.083 2.32-.083 1.38 0 2.167-.015 2.302-.044.758-.163.758-1.269 0-1.432-.244-.052-4.116-.053-4.522 0m16.167 12.005c-.249.053-.465.281-.523.549-.029.135-.044.922-.044 2.302 0 2.028-.003 2.104-.083 2.32a1.28 1.28 0 0 1-.697.697c-.216.08-.292.083-2.32.083-1.38 0-2.167.015-2.302.044-.771.165-.756 1.274.018 1.435.305.063 4.485.034 4.744-.033a2.859 2.859 0 0 0 2.086-2.086c.065-.251.097-4.445.035-4.73-.095-.446-.461-.678-.914-.581'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgScreenshot);
export default ForwardRef;
