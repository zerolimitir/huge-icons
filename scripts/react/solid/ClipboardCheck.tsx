import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClipboardCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.799 1.561a2.16 2.16 0 0 0-1.072.689c-.889 1.119-.368 2.754 1.013 3.177.221.067.422.073 2.54.073 2.27 0 2.304-.001 2.585-.09a2.006 2.006 0 0 0 1.355-1.438c.262-1.003-.366-2.092-1.377-2.388-.189-.056-.526-.063-2.56-.06-1.289.002-2.406.019-2.484.037M6.485 3.584A4.448 4.448 0 0 0 5 4.213c-.243.165-.69.597-.901.87a4.136 4.136 0 0 0-.759 1.743c-.09.516-.09 10.832 0 11.348.242 1.385 1.246 2.6 2.535 3.067.76.275.364.259 6.405.259s5.645.016 6.405-.259c.879-.318 1.734-1.08 2.156-1.921.172-.342.304-.737.379-1.13.09-.479.09-10.901 0-11.38a4.37 4.37 0 0 0-.633-1.57c-.178-.264-.691-.782-.971-.984-.466-.334-1.247-.657-1.697-.702l-.139-.014-.028.305c-.041.452-.133.768-.353 1.215-.44.891-1.205 1.526-2.199 1.826-.295.089-.34.091-2.752.104-2.698.015-2.832.006-3.437-.229-1.073-.416-1.918-1.412-2.148-2.529a3.239 3.239 0 0 1-.063-.488c0-.099-.013-.187-.03-.196-.016-.01-.145.007-.285.036m9.087 7.23c.176.074.375.31.429.509a.68.68 0 0 1-.082.544c-.119.208-3.1 3.585-3.254 3.687a1.789 1.789 0 0 1-1.765.143c-.182-.086-1.774-1.326-2.093-1.63-.331-.314-.36-.729-.076-1.053a.73.73 0 0 1 .871-.183c.076.039.547.399 1.047.8.701.562.935.729 1.023.729.1 0 .277-.187 1.45-1.53 1.613-1.846 1.705-1.947 1.858-2.014a.878.878 0 0 1 .592-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardCheck);
export default ForwardRef;