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
            fillRule='evenodd'
            d='M15.75 20H18a4 4 0 0 0 4-4v-2c0-5.523-4.477-10-10-10S2 8.477 2 14v2a4 4 0 0 0 4 4h2.25a3.75 3.75 0 0 1 3.31-3.724l2.797-4.662a.75.75 0 0 1 1.286.772l-2.437 4.062A3.752 3.752 0 0 1 15.75 20Zm-6 0a2.25 2.25 0 1 1 4.5 0h-4.5Zm-2.553-9.592C8.142 8.948 9.56 7.75 12 7.75s3.858 1.197 4.803 2.658a.75.75 0 0 0 1.26-.815C16.914 7.82 15.072 6.25 12 6.25c-3.072 0-4.915 1.57-6.062 3.343a.75.75 0 0 0 1.26.815Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeedTest);
export default ForwardRef;
