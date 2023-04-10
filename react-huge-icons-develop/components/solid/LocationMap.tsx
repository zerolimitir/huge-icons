import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationMap = (
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
            d='M18 9.222C18 12.66 14.25 17 12 17s-6-4.341-6-7.778C6 5.786 8.686 3 12 3s6 2.786 6 6.222ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8.167 7H7.17c1.567 1.766 3.42 3 4.83 3 1.41 0 3.263-1.234 4.83-3h1.337a2 2 0 0 1 1.846 1.23l.833 2A2 2 0 0 1 19 22H5a2 2 0 0 1-1.846-2.77l.833-2A2 2 0 0 1 5.833 16Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationMap);
export default ForwardRef;
