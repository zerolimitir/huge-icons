import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSchool = (
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
            d='M2 8a2 2 0 0 1 2-2h2.298a2 2 0 0 0 1.25-.438L10.75 3a2 2 0 0 1 2.498 0l3.203 2.562a2 2 0 0 0 1.25.438H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M9 18a3 3 0 1 1 6 0v4H9v-4Zm5-8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSchool);
export default ForwardRef;
