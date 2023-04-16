import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocationAccordion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.711 2.062c-1.86.29-3.352 1.713-3.694 3.523-.086.459-.058 1.309.06 1.851.336 1.529 1.22 3.21 2.239 4.257 1.275 1.31 2.448 1.48 3.703.537 1.314-.987 2.55-3.169 2.88-5.085.078-.453.078-1.165.001-1.575-.444-2.339-2.737-3.89-5.189-3.508M13.1 4.841c.267.13.523.393.652.671.086.186.106.288.107.549.001.283-.014.352-.131.588a1.354 1.354 0 0 1-2.437-.003c-.096-.196-.111-.274-.111-.586 0-.313.015-.39.112-.588.137-.279.437-.559.72-.67.295-.116.807-.098 1.088.039M6.098 6.657c-.911.394-2.015 1.053-3.106 1.851-.578.424-.842.781-.947 1.284C2.013 9.941 2 11.484 2 15.015c0 5.637-.022 5.237.305 5.563.303.304.784.42 1.171.284a2.98 2.98 0 0 0 .455-.247c1.126-.731 2.137-1.245 2.988-1.52l.321-.103V9.3l-.119-.304c-.234-.602-.48-1.717-.53-2.402l-.011-.146-.482.209m14.465.587c-.075.023-.327.164-.56.313-.612.392-1.119.683-1.644.943l-.461.229-.151.409a12.948 12.948 0 0 1-.82 1.716l-.167.274v10.754l.11-.026c.712-.167 2.189-.908 3.33-1.669 1.29-.862 1.619-1.21 1.755-1.859.032-.149.045-1.692.045-5.223 0-5.584.018-5.234-.277-5.537a1.425 1.425 0 0 0-.339-.246c-.216-.105-.61-.142-.821-.078M8.76 15.408v3.427l.19.026c.591.08 1.319.382 2.003.831.213.14.72.504 1.127.81 1.15.863 1.672 1.168 2.38 1.39.176.055.423.113.55.129l.23.028v-9.056l-.19.158c-1.007.838-2.173 1.194-3.21.978-.655-.136-1.174-.381-1.789-.847-.304-.229-.968-.882-1.183-1.162l-.107-.14-.001 3.428'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationAccordion);
export default ForwardRef;