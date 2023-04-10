import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderFavourite = (
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
            d='M22 10v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2.667a4 4 0 0 1 2.4.8l1.866 1.4a4 4 0 0 0 2.4.8H18a4 4 0 0 1 4 4Zm-10.78 6.024-1.855-2.318A1.666 1.666 0 0 1 9 12.666v-.075a1.591 1.591 0 0 1 2.716-1.125l.284.284.284-.284A1.591 1.591 0 0 1 15 12.591v.075c0 .378-.129.745-.365 1.04l-1.854 2.318a1 1 0 0 1-1.562 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderFavourite);
export default ForwardRef;
