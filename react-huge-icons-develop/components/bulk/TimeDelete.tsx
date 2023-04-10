import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeDelete = (
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
            d='M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.348 17.348a.75.75 0 0 1 1.061 0L20 18.94l1.591-1.59a.75.75 0 1 1 1.06 1.06L21.062 20l1.59 1.59a.75.75 0 0 1-1.06 1.061l-1.59-1.59-1.592 1.59a.75.75 0 0 1-1.06-1.06L18.938 20l-1.59-1.591a.75.75 0 0 1 0-1.06ZM12 5.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm-.97 7.72a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeDelete);
export default ForwardRef;
