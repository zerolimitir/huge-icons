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
            d='M22 17v-7a4 4 0 0 0-4-4h-2.667a4 4 0 0 1-2.4-.8l-1.866-1.4a4 4 0 0 0-2.4-.8H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m9.365 13.706 1.854 2.318a1 1 0 0 0 1.562 0l1.854-2.318c.236-.295.365-.662.365-1.04v-.075a1.591 1.591 0 0 0-2.716-1.125L12 11.75l-.284-.284A1.591 1.591 0 0 0 9 12.591v.075c0 .378.129.745.365 1.04Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderFavourite);
export default ForwardRef;
