import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudWindRain = (
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
            d='M2 10a6.995 6.995 0 0 0 3.25 5.911l.514-1.03A2.5 2.5 0 0 1 10 14.5a2.501 2.501 0 0 1 4 0 2.5 2.5 0 0 1 4.365 2.312 5 5 0 1 0-2.926-9.563A7.002 7.002 0 0 0 2 10Zm10.696 6.279a.75.75 0 1 0-1.392-.558l-2 5a.75.75 0 1 0 1.392.558l2-5Zm-4.025.056a.75.75 0 0 0-1.342-.67l-1 2a.75.75 0 0 0 1.342.67l1-2Zm8 0a.75.75 0 0 0-1.342-.67l-1 2a.75.75 0 0 0 1.342.67l1-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudWindRain);
export default ForwardRef;
