import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeakerDisable = (
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
            d='m13.8 19.597.45-.6-.45.6Zm-4.267-3.2.45-.6-.45.6Zm9.937 4.133a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM4.53 3.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm9.27.933-.45-.6.45.6Zm-3.534 1.713a.75.75 0 1 0 .9 1.2l-.9-1.2ZM16.25 13a.75.75 0 0 0 1.5 0h-1.5Zm-2 5.997-4.267-3.2-.9 1.201 4.267 3.199.9-1.2Zm2-1c0 1.029-1.176 1.618-2 1l-.9 1.2c1.813 1.358 4.4.066 4.4-2.2h-1.5Zm-13-7.996v3.998h1.5v-3.998h-1.5ZM6 16.748h2.334v-1.5H6v1.5ZM3.25 14A2.75 2.75 0 0 0 6 16.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM6 7.252A2.75 2.75 0 0 0 3.25 10h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm3.983 8.546a2.75 2.75 0 0 0-1.65-.55v1.5c.27 0 .534.088.75.25l.9-1.2ZM16.25 17v.997h1.5V17h-1.5Zm.22.53 3 3 1.06-1.06-3-3-1.06 1.06Zm-13-13 4 4.002 1.061-1.06L4.53 3.47 3.47 4.53Zm4 4.002 8.999 8.998 1.06-1.06-8.997-9-1.06 1.061ZM8 7.252H6v1.5h2.002v-1.5Zm6.249-2.248c.824-.619 2-.03 2 .999h1.5c0-2.266-2.588-3.558-4.4-2.2l.9 1.2Zm-3.085 2.312 3.085-2.312-.9-1.2-3.084 2.312.9 1.2Zm5.085-1.313V13h1.5V6.003h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerDisable);
export default ForwardRef;
