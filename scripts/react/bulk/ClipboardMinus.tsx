import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClipboardMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.62 2.041a2.006 2.006 0 0 0-1.372 2.927c.146.275.541.664.813.802.457.232.434.23 2.939.23 2.532 0 2.493.003 2.968-.248.275-.146.664-.54.803-.815.183-.361.242-.638.217-1.016-.058-.854-.544-1.512-1.338-1.812-.226-.086-.274-.088-2.55-.095-1.276-.004-2.392.008-2.48.027M8.7 13.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardMinus);
export default ForwardRef;
