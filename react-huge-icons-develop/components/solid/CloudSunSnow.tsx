import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunSnow = (
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
            d='M15.75 2a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V2ZM9.5 17A.75.75 0 1 1 8 17a.75.75 0 0 1 1.5 0Zm2.5 2.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 20A.75.75 0 1 1 8 20a.75.75 0 0 1 1.5 0Zm5.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm5.23-14.23a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.061l.706-.707a.75.75 0 0 1 1.061 0ZM22 9.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5h1Zm-3.004-.937a4 4 0 0 0-5.963-3.297 8.533 8.533 0 0 1 3.207 3.028 6.555 6.555 0 0 1 2.756.269ZM2 13a7.003 7.003 0 0 0 4.544 6.557c.08-.401.266-.764.529-1.057A2.25 2.25 0 1 1 11 16.984c.301-.15.64-.234 1-.234s.699.084 1 .234a2.25 2.25 0 1 1 3.927 1.516c.351.392.567.909.573 1.475a5 5 0 1 0-2.061-9.726 7.026 7.026 0 0 0-3.63-3.662A7 7 0 0 0 2 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunSnow);
export default ForwardRef;
