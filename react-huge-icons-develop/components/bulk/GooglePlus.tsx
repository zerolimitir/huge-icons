import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGooglePlus = (
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
            d='M19.25 14a.75.75 0 0 0 1.5 0v-1.25H22a.75.75 0 0 0 0-1.5h-1.25V10a.75.75 0 0 0-1.5 0v1.25H18a.75.75 0 0 0 0 1.5h1.25V14Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M9 19a7 7 0 0 0 7-7v-.037c-.003-.585-.51-1.013-1.095-1.013H10.05a1.05 1.05 0 1 0 0 2.1h3.737A4.902 4.902 0 0 1 4.1 12a4.9 4.9 0 0 1 7.55-4.123c.487.314 1.147.326 1.557-.084.41-.41.414-1.083-.052-1.427A7 7 0 1 0 9 19Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGooglePlus);
export default ForwardRef;
