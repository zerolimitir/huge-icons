import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartMiddleShort = (
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
            d='M2 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0V5Zm8 5a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0v-9Zm10-7a2 2 0 0 0-2 2v14a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartMiddleShort);
export default ForwardRef;
