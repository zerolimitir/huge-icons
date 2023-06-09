import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClipboardActivity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.62 2.041a2.006 2.006 0 0 0-1.372 2.927c.146.275.541.664.813.802.457.232.434.23 2.939.23 2.532 0 2.493.003 2.968-.248.275-.146.664-.54.803-.815.183-.361.242-.638.217-1.016-.058-.854-.544-1.512-1.338-1.812-.226-.086-.274-.088-2.55-.095-1.276-.004-2.392.008-2.48.027m1.08 8.276c-.101.047-.5.416-1.08.999l-.919.924-.921.001c-.809.001-.939.01-1.08.075a.743.743 0 0 0 0 1.368c.144.067.276.074 1.3.074 1.031 0 1.155-.007 1.3-.075.096-.045.422-.339.819-.739l.66-.664.78 1.557c.43.857.826 1.606.881 1.665.13.14.383.256.56.256.274 0 .438-.128 1.38-1.074l.919-.924.921-.001c.999-.001 1.126-.024 1.328-.244a.746.746 0 0 0-.248-1.199c-.144-.067-.276-.074-1.3-.074-1.031 0-1.155.007-1.3.075-.096.045-.422.339-.819.739l-.66.664-.78-1.557c-.43-.857-.826-1.606-.881-1.665a.888.888 0 0 0-.56-.256.842.842 0 0 0-.3.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardActivity);
export default ForwardRef;
