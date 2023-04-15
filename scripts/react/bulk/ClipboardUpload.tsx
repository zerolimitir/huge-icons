import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClipboardUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.62 2.041a2.006 2.006 0 0 0-1.372 2.927c.146.275.541.664.813.802.457.232.434.23 2.939.23 2.532 0 2.493.003 2.968-.248.275-.146.664-.54.803-.815.183-.361.242-.638.217-1.016-.058-.854-.544-1.512-1.338-1.812-.226-.086-.274-.088-2.55-.095-1.276-.004-2.392.008-2.48.027m1.892 8.276a2.54 2.54 0 0 0-.42.185c-.214.125-1.611 1.482-1.739 1.69-.393.636.233 1.39.918 1.106.083-.034.33-.241.559-.469l.41-.408.001 2.16c.001 2.022.005 2.169.076 2.324a.76.76 0 0 0 .853.413.778.778 0 0 0 .513-.413c.071-.155.075-.302.076-2.324l.001-2.16.41.408c.422.42.6.531.85.531.161 0 .4-.089.513-.192.244-.22.306-.648.135-.937-.131-.222-1.468-1.543-1.728-1.707-.429-.272-.977-.351-1.428-.207'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardUpload);
export default ForwardRef;
