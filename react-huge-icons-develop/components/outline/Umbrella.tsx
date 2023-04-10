import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUmbrella = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M8 20a2 2 0 1 0 4 0v-8'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M12 2c4.308 0 8.66 3.778 9.744 8.022C22.017 11.092 21.104 12 20 12H4c-1.105 0-2.017-.908-1.744-1.978C3.339 5.778 7.692 2 12 2Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M12 2c2.21 0 4 4.477 4 10H8C8 6.477 9.79 2 12 2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUmbrella);
export default ForwardRef;
