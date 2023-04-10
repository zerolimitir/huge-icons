import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphonesMicrophone = (
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
            d='M12 2.75a8.25 8.25 0 0 0-8.247 8.009A3.25 3.25 0 0 1 8.75 13.5v2a3.25 3.25 0 0 1-6.5 0V11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v5A6.75 6.75 0 0 1 15 22.75h-3a.75.75 0 0 1 0-1.5h3a5.248 5.248 0 0 0 4.581-2.684A3.25 3.25 0 0 1 15.25 15.5v-2a3.25 3.25 0 0 1 4.997-2.741A8.25 8.25 0 0 0 12 2.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphonesMicrophone);
export default ForwardRef;
