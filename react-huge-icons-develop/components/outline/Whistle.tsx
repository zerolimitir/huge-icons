import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWhistle = (
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
            d='M14 15v-.75a.75.75 0 0 0-.75.75H14Zm7.11-1.406-.417-.624.416.624Zm-1.102.734.416.624-.416-.624ZM14.75 9a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm0-6.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.5a.75.75 0 0 0-1.5 0h1.5ZM9.47 6.53a.75.75 0 1 0 1.06-1.06L9.47 6.53Zm.06-2.06a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm7.94 1a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm2.06.06a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM9.25 15c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 15h-1.5ZM8 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 8 17.75v-1.5ZM6.75 15c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 5.25 15h1.5ZM8 13.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 12.25v1.5Zm0-4h12v-1.5H8v1.5ZM13.25 15c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 15h-1.5ZM8 20.25A5.25 5.25 0 0 1 2.75 15h-1.5A6.75 6.75 0 0 0 8 21.75v-1.5ZM2.75 15c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 1.25 15h1.5Zm11.25.75h3.789v-1.5H14v1.5ZM21.25 11v.93h1.5V11h-1.5Zm-.557 1.97-1.101.734.832 1.248 1.101-.734-.832-1.248Zm.557-1.04c0 .418-.209.808-.557 1.04l.832 1.248a2.75 2.75 0 0 0 1.225-2.288h-1.5ZM20 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 8.25v1.5Zm-2.211 6a4.75 4.75 0 0 0 2.635-.798l-.832-1.248a3.25 3.25 0 0 1-1.803.546v1.5ZM13.25 9v2h1.5V9h-1.5Zm1.5-4.5V3h-1.5v1.5h1.5Zm-4.22.97-1-1-1.06 1.06 1 1 1.06-1.06Zm8 1.06 1-1-1.06-1.06-1 1 1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWhistle);
export default ForwardRef;
