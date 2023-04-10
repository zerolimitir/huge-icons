import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSnow = (
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
            d='M2 11a7.003 7.003 0 0 0 4.544 6.557c.08-.401.266-.764.529-1.057A2.25 2.25 0 1 1 11 14.984c.301-.15.64-.234 1-.234s.699.084 1 .234a2.25 2.25 0 1 1 3.927 1.516c.351.392.567.909.573 1.475a5 5 0 1 0-2.061-9.726A7.002 7.002 0 0 0 2 11Zm6.75 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4 1.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4-1.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM16 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSnow);
export default ForwardRef;
