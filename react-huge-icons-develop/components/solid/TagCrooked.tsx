import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTagCrooked = (
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
            d='M12.576 3.5A4.078 4.078 0 0 0 9.41 4.69l-6.565 6.564c-1.583 1.584-1.6 4.134-.038 5.696l4.242 4.242c1.562 1.563 4.112 1.545 5.696-.038l6.565-6.565a4.077 4.077 0 0 0 1.189-3.165l-.278-3.964a3.96 3.96 0 0 0-3.682-3.682L12.576 3.5Zm.838 7.086a2 2 0 1 0 2.829-2.828 2 2 0 0 0-2.829 2.828Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTagCrooked);
export default ForwardRef;
