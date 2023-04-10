import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileFavouriteBent = (
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
            d='M2 5v12.25c0 1.795 1.48 3.25 3.275 3.25 1.768 0 3.225-1.433 3.225-3.2a.8.8 0 0 1 .8-.8H18V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm5.365 4.706 1.854 2.318a1 1 0 0 0 1.562 0l1.854-2.318c.236-.295.365-.662.365-1.04V8.59a1.591 1.591 0 0 0-2.716-1.125L10 7.75l-.284-.284A1.591 1.591 0 0 0 7 8.591v.075c0 .378.129.745.365 1.04Zm14.512 9.284A4.002 4.002 0 0 1 18 22H6a4.002 4.002 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h10c.552 0 1.013.455.877.99Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileFavouriteBent);
export default ForwardRef;
