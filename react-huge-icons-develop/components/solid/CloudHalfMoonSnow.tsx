import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoonSnow = (
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
            d='M20.832 9.749a6.5 6.5 0 0 1 .19.144c.614-.831.978-1.86.978-2.973 0-.245-.267-.385-.495-.293a4 4 0 0 1-5.502-3.873c.015-.36-.293-.68-.634-.562a5.014 5.014 0 0 0-3.054 2.979 8.5 8.5 0 0 1 3.925 3.373 6.478 6.478 0 0 1 4.592 1.205Zm-8.832 13a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4 1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM16 20a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-7.25-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM16 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM2 13a7.003 7.003 0 0 0 4.544 6.558c.08-.401.266-.764.529-1.057A2.25 2.25 0 1 1 11 16.984c.301-.15.64-.234 1-.234s.699.084 1 .234a2.25 2.25 0 1 1 3.927 1.516c.351.392.567.909.573 1.475a5 5 0 1 0-2.061-9.727 7.027 7.027 0 0 0-3.433-3.572A7 7 0 0 0 2 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonSnow);
export default ForwardRef;
