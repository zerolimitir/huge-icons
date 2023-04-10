import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAirPlane = (
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
            d='M14.41 6.34V4.405a2.41 2.41 0 1 0-4.821 0V6.34a2 2 0 0 1-.99 1.726l-4.89 2.862c-.88.515-.515 1.863.505 1.863h4.524a1 1 0 0 1 1 1v2.477a3 3 0 0 1-.62 1.826l-1.775 2.313a.994.994 0 0 0 1.159 1.527l2.736-1.123a2 2 0 0 1 1.517 0l2.743 1.123a.994.994 0 0 0 1.159-1.527l-1.775-2.313a3 3 0 0 1-.62-1.826V13.79a1 1 0 0 1 1-1h4.524c1.02 0 1.385-1.348.505-1.863L15.4 8.066a2 2 0 0 1-.99-1.726Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAirPlane);
export default ForwardRef;
