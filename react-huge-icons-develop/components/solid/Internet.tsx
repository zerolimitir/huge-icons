import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInternet = (
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
            d='M10.632 2.007c.307-.389.764-.757 1.368-.757.604 0 1.06.368 1.367.757.046.058.09.119.133.182a6.006 6.006 0 0 1 4.453 5.061H18a.75.75 0 1 1 0 1.5h-.047a6.006 6.006 0 0 1-4.453 5.06 3.235 3.235 0 0 1-.133.183c-.305.387-.759.754-1.36.757a.75.75 0 0 1 .743.75v.878c.64.226 1.146.733 1.372 1.372H20a.75.75 0 0 1 0 1.5h-5.878a2.257 2.257 0 0 1-1.372 1.372V22a.75.75 0 0 1-1.5 0v-1.378a2.256 2.256 0 0 1-1.372-1.372H4a.75.75 0 0 1 0-1.5h5.878a2.256 2.256 0 0 1 1.372-1.372V15.5a.75.75 0 0 1 .742-.75c-.6-.003-1.054-.37-1.36-.757a3.235 3.235 0 0 1-.133-.182A6.006 6.006 0 0 1 6.046 8.75H6a.75.75 0 0 1 0-1.5h.046A6.006 6.006 0 0 1 10.5 2.19c.043-.064.088-.125.133-.183Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInternet);
export default ForwardRef;
