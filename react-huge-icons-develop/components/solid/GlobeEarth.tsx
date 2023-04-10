import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobeEarth = (
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
            d='M19.96 18.053A9.984 9.984 0 0 1 12 22a9.997 9.997 0 0 1-2.746-.382 3.216 3.216 0 0 0 2.305-3.082 3.217 3.217 0 0 0-3.22-3.215c-.95 0-1.718-.769-1.718-1.714a3.217 3.217 0 0 0-3.22-3.215H2.13C2.898 5.634 7.024 2 12 2c1.726 0 3.35.437 4.767 1.207a3.197 3.197 0 0 0-.535 1.774c0 .946-.768 1.715-1.72 1.715a3.217 3.217 0 0 0-3.218 3.214 3.217 3.217 0 0 0 3.219 3.215c.95 0 1.719.768 1.719 1.714a3.217 3.217 0 0 0 3.22 3.214h.508Zm.945-1.5h-1.454c-.95 0-1.719-.769-1.719-1.714a3.217 3.217 0 0 0-3.22-3.214c-.95 0-1.718-.77-1.718-1.715 0-.945.768-1.714 1.719-1.714a3.217 3.217 0 0 0 3.219-3.215c0-.356.108-.687.295-.961A9.984 9.984 0 0 1 22 12a9.95 9.95 0 0 1-1.095 4.553Zm-18.904-4.66L2 12a9.98 9.98 0 0 0 4.347 8.25H8.34c.95 0 1.719-.769 1.719-1.714 0-.946-.768-1.715-1.72-1.715a3.217 3.217 0 0 1-3.218-3.214c0-.946-.769-1.715-1.72-1.715h-1.4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeEarth);
export default ForwardRef;
