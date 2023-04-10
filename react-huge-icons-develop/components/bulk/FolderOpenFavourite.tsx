import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenFavourite = (
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
            d='M20.526 8H3.474a2 2 0 0 0-1.956 2.42l1.805 8.418A4 4 0 0 0 7.233 22h9.533a4 4 0 0 0 3.912-3.162l1.804-8.419A2 2 0 0 0 20.526 8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m9.365 14.706 1.854 2.318a1 1 0 0 0 1.562 0l1.854-2.318c.236-.295.365-.662.365-1.04v-.075a1.591 1.591 0 0 0-2.716-1.125L12 12.75l-.284-.284A1.591 1.591 0 0 0 9 13.591v.075c0 .378.129.745.365 1.04ZM20 8V7a3 3 0 0 0-3-3h-2.803a3 3 0 0 1-1.843-.634l-.94-.732A3 3 0 0 0 9.568 2H7a3 3 0 0 0-3 3v3h16Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenFavourite);
export default ForwardRef;
