import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClipboardFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.62 2.041a2.006 2.006 0 0 0-1.372 2.927c.146.275.541.664.813.802.457.232.434.23 2.939.23 2.532 0 2.493.003 2.968-.248.275-.146.664-.54.803-.815.183-.361.242-.638.217-1.016-.058-.854-.544-1.512-1.338-1.812-.226-.086-.274-.088-2.55-.095-1.276-.004-2.392.008-2.48.027m.304 9.382c-.919.247-1.527 1.182-1.372 2.107.099.584.174.686 1.443 1.954 1.221 1.221 1.295 1.278 1.761 1.365.288.053.626.004.918-.134.232-.11 2.254-2.1 2.488-2.449.375-.559.42-1.315.113-1.915-.11-.217-.487-.611-.706-.74-.559-.327-1.341-.336-1.889-.021a2.981 2.981 0 0 0-.43.343l-.25.24-.251-.242c-.516-.495-1.182-.681-1.825-.508'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardFavourite);
export default ForwardRef;
