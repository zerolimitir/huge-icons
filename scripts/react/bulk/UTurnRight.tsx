import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUTurnRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.34 7.296c-.772.15-1.371.46-1.934 1.001a3.816 3.816 0 0 0-1.052 1.763c-.091.318-.092.339-.105 3.16-.01 1.97-.001 2.885.03 2.988.124.422.596.655.992.49a.734.734 0 0 0 .413-.398c.07-.15.074-.319.075-2.823.001-1.71.016-2.747.044-2.9.023-.13.113-.385.2-.565.647-1.349 2.481-1.668 3.548-.618.27.267.416.494.564.881.096.253.101.309.116 1.285l.014 1.02-.412-.408c-.229-.227-.479-.436-.562-.47-.685-.284-1.312.471-.918 1.106.123.199 1.478 1.524 1.707 1.668.263.167.652.284.94.284.288 0 .677-.117.94-.284.26-.164 1.597-1.485 1.728-1.707.171-.289.109-.717-.135-.937a.904.904 0 0 0-.513-.192c-.249 0-.428.112-.846.527l-.406.404-.018-1.096c-.016-.978-.027-1.129-.107-1.415a3.774 3.774 0 0 0-1.049-1.763c-.709-.68-1.487-1.007-2.474-1.039a3.86 3.86 0 0 0-.78.038'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUTurnRight);
export default ForwardRef;
