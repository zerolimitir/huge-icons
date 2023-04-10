import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonSnow = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21.75 9.564a6.485 6.485 0 0 0-5.51-2.02 8.535 8.535 0 0 0-2.957-2.888 5 5 0 0 1 8.468 4.907ZM12 18.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2 12a7.003 7.003 0 0 0 4.544 6.557c.08-.401.266-.764.529-1.057A2.25 2.25 0 1 1 11 15.984c.301-.15.64-.234 1-.234s.699.084 1 .234a2.25 2.25 0 1 1 3.927 1.516c.351.392.567.909.573 1.475a5 5 0 1 0-2.061-9.726 7.028 7.028 0 0 0-2.983-3.338A7 7 0 0 0 2 12Zm7.5 7A.75.75 0 1 1 8 19a.75.75 0 0 1 1.5 0Zm5.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 16A.75.75 0 1 1 8 16a.75.75 0 0 1 1.5 0Zm5.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonSnow);
export default ForwardRef;
