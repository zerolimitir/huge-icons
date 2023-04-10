import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPixelGridCircle = (
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
            d='M12 3.538a8.425 8.425 0 0 0-3.648.825.77.77 0 1 1-.664-1.388A9.964 9.964 0 0 1 12 2a9.97 9.97 0 0 1 4.312.975.77.77 0 0 1-.664 1.388A8.426 8.426 0 0 0 12 3.538ZM4 7.326a.77.77 0 0 1 .363 1.026A8.425 8.425 0 0 0 3.538 12a8.43 8.43 0 0 0 .825 3.648.77.77 0 1 1-1.388.664A9.964 9.964 0 0 1 2 12c0-1.542.35-3.005.975-4.312a.77.77 0 0 1 1.026-.362Zm16 0a.77.77 0 0 1 1.025.362A9.963 9.963 0 0 1 22 12a9.97 9.97 0 0 1-.975 4.312.77.77 0 1 1-1.388-.664A8.426 8.426 0 0 0 20.462 12a8.426 8.426 0 0 0-.825-3.648A.77.77 0 0 1 20 7.326ZM7.325 20a.77.77 0 0 1 1.026-.362 8.426 8.426 0 0 0 3.648.825 8.426 8.426 0 0 0 3.648-.825.77.77 0 1 1 .664 1.388A9.963 9.963 0 0 1 12 22a9.963 9.963 0 0 1-4.312-.975.77.77 0 0 1-.362-1.026Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M8.667 5.333a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Zm13.333 0a3.32 3.32 0 0 1-.975 2.356A3.333 3.333 0 1 1 22 5.334ZM8.667 18.667c0 .921-.374 1.755-.978 2.358a3.333 3.333 0 1 1 .978-2.359Zm13.333 0a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPixelGridCircle);
export default ForwardRef;
