import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileFavourite = (
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
            d='M3 6v12a4 4 0 0 0 4 4h4.343c.308 0 .612-.035.907-.104V18A4.75 4.75 0 0 1 17 13.25h3.896c.069-.295.104-.6.104-.907V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Zm11.172 14.828a4.013 4.013 0 0 1-.422.367V18A3.25 3.25 0 0 1 17 14.75h3.195a4.013 4.013 0 0 1-.367.422l-5.656 5.656Zm-2.953-9.804L9.365 8.706A1.666 1.666 0 0 1 9 7.666V7.59a1.591 1.591 0 0 1 2.716-1.125L12 6.75l.284-.284A1.591 1.591 0 0 1 15 7.591v.075c0 .378-.129.745-.365 1.04l-1.854 2.318a1 1 0 0 1-1.562 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileFavourite);
export default ForwardRef;
