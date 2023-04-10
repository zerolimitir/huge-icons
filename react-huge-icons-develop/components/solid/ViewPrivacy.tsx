import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgViewPrivacy = (
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
            d='M12 18a8.39 8.39 0 0 0 2-.248v-4.516A3 3 0 1 1 14.83 10h7.002a3.162 3.162 0 0 0-.702-1.147C19.174 6.795 15.816 4 12 4 8.184 4 4.825 6.795 2.87 8.853a3.085 3.085 0 0 0 0 4.294C4.825 15.205 8.184 18 12 18Zm6.5-5.25a.75.75 0 0 0-.75.75V15h1.5v-1.5a.75.75 0 0 0-.75-.75Zm-2.25.75v1.645A2 2 0 0 0 15 17v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-1.25-1.855V13.5a2.25 2.25 0 0 0-4.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgViewPrivacy);
export default ForwardRef;
