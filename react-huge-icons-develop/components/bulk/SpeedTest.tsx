import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeedTest = (
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
            d='M18 20H6a4 4 0 0 1-4-4v-2C2 8.477 6.477 4 12 4s10 4.477 10 10v2a4 4 0 0 1-4 4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 7.75c-2.44 0-3.858 1.197-4.803 2.658a.75.75 0 0 1-1.26-.815C7.086 7.82 8.928 6.25 12 6.25c3.072 0 4.915 1.57 6.062 3.343a.75.75 0 0 1-1.26.815C15.859 8.948 14.44 7.75 12 7.75Zm3.67 4.585a.75.75 0 1 0-1.34-.67l-2.68 5.355A3 3 0 0 0 9 20h6a3 3 0 0 0-1.789-2.745l2.46-4.92Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeedTest);
export default ForwardRef;
