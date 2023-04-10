import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPaintBucket = (
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
            d='M21.985 18.735c0 1.657-1 2.25-2 2.25s-2-.593-2-2.25 2-3.75 2-3.75 2 2.093 2 3.75Z'
        />
        <path
            fill='currentColor'
            d='M12.957 3.642 20 10.612l-3.13 1.55-6.261 6.196a2.23 2.23 0 0 1-3.13 0l-4.696-4.647a2.173 2.173 0 0 1 0-3.098l7.043-6.971a2.23 2.23 0 0 1 3.13 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m2.783 13.71 4.695 4.648a2.23 2.23 0 0 0 3.13 0l6.262-6.196H2.134c0 .56.216 1.121.649 1.549Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaintBucket);
export default ForwardRef;
