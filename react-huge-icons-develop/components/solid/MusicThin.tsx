import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicThin = (
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
            d='M18.06 2.271a2.75 2.75 0 0 1 3.69 2.584V12.5a4.25 4.25 0 1 1-1.5-3.24V4.855a1.25 1.25 0 0 0-1.677-1.174l-5.684 2.066a3.25 3.25 0 0 0-2.139 3.055V18.5a4.25 4.25 0 1 1-1.5-3.24V8.801a4.75 4.75 0 0 1 3.127-4.464L18.06 2.27Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicThin);
export default ForwardRef;
