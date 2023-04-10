import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTemperatureMinus = (
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
            d='M12 22a5 5 0 0 0 3-9V5a3 3 0 1 0-6 0v8a5 5 0 0 0 3 9Zm.75-9a.75.75 0 0 0-1.5 0v2.145a2 2 0 1 0 1.5 0V13ZM22 4.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperatureMinus);
export default ForwardRef;
