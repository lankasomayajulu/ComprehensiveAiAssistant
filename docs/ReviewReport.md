# Code Review Report

This report compiles all coding practice and documentation audits.

---

## Coding Practice Compliance


### Naming Conventions Violations
- Frontend JS violation: file 'eslint.config.js' should use .jsx extension.
- Frontend JS violation: file 'vite.config.js' should use .jsx extension.

### Function Length Violations
- typing_extensions.py: function '__new__' has 118 lines (max 40).
- typing_extensions.py: function '_create_typeddict' has 62 lines (max 40).
- typing_extensions.py: function 'TypedDict' has 62 lines (max 40).
- typing_extensions.py: function 'get_type_hints' has 42 lines (max 40).
- typing_extensions.py: function '_clean_optional' has 55 lines (max 40).
- typing_extensions.py: function '__getitem__' has 77 lines (max 40).
- typing_extensions.py: function '_typevartuple_prepare_subst' has 45 lines (max 40).
- typing_extensions.py: function '_check_generic' has 53 lines (max 40).
- typing_extensions.py: function '_collect_type_vars' has 48 lines (max 40).
- typing_extensions.py: function '_collect_parameters' has 56 lines (max 40).
- typing_extensions.py: function '__new__' has 70 lines (max 40).
- typing_extensions.py: function 'NamedTuple' has 65 lines (max 40).
- typing_extensions.py: function 'get_annotations' has 130 lines (max 40).
- typing_extensions.py: function '_eval_with_owner' has 78 lines (max 40).
- typing_extensions.py: function 'evaluate_forward_ref' has 89 lines (max 40).
- _virtualenv.py: function 'find_spec' has 44 lines (max 40).
- test_cases.py: function 'cases' has 123 lines (max 40).
- pytest_plugin.py: function 'pytest_collection_finish' has 58 lines (max 40).
- to_process.py: function 'process_worker' has 60 lines (max 40).
- _sockets.py: function '_validate_socket' has 69 lines (max 40).
- _asyncio.py: function 'run' has 48 lines (max 40).
- _asyncio.py: function '__exit__' has 98 lines (max 40).
- _asyncio.py: function '_deliver_cancellation' has 46 lines (max 40).
- _asyncio.py: function 'task_done' has 47 lines (max 40).
- _asyncio.py: function 'notify_closing' has 48 lines (max 40).
- _eventloop.py: function 'run' has 50 lines (max 40).
- _sockets.py: function 'as_connectable' has 58 lines (max 40).
- binary.py: function 'from_uuid' has 54 lines (max 40).
- binary.py: function 'as_uuid' has 44 lines (max 40).
- binary.py: function 'from_vector' has 96 lines (max 40).
- binary.py: function 'as_vector' has 91 lines (max 40).
- codec_options.py: function '__init__' has 84 lines (max 40).
- codec_options.py: function '__new__' has 63 lines (max 40).
- decimal128.py: function '_decimal_to_128' has 48 lines (max 40).
- decimal128.py: function 'to_decimal' has 41 lines (max 40).
- json_util.py: function '__init__' has 56 lines (max 40).
- json_util.py: function '__new__' has 67 lines (max 40).
- json_util.py: function '_parse_canonical_datetime' has 69 lines (max 40).
- json_util.py: function 'get_size' has 41 lines (max 40).
- objectid.py: function '__init__' has 60 lines (max 40).
- raw_bson.py: function '__init__' has 52 lines (max 40).
- __init__.py: function '_get_array' has 42 lines (max 40).
- __init__.py: function '_name_value_to_bson' has 68 lines (max 40).
- __init__.py: function '_decode_all_selective' has 45 lines (max 40).
- api.py: function '__init__' has 60 lines (max 40).
- cparser.py: function '_workaround_for_old_pycparser' has 42 lines (max 40).
- cparser.py: function '_preprocess_extern_python' has 50 lines (max 40).
- cparser.py: function '_internal_parse' has 63 lines (max 40).
- cparser.py: function '_parse_decl' has 51 lines (max 40).
- cparser.py: function '_get_type_and_quals' has 105 lines (max 40).
- cparser.py: function '_get_struct_union_enum_type' has 118 lines (max 40).
- cparser.py: function '_parse_constant' has 73 lines (max 40).
- model.py: function 'finish_backend_type' has 63 lines (max 40).
- model.py: function 'build_baseinttype' has 41 lines (max 40).
- recompiler.py: function 'collect_type_table' has 58 lines (max 40).
- recompiler.py: function 'write_c_source_to_f' has 173 lines (max 40).
- recompiler.py: function 'write_py_source_to_f' has 52 lines (max 40).
- recompiler.py: function '_convert_funcarg_to_c' has 45 lines (max 40).
- recompiler.py: function '_generate_cpy_function_decl' has 117 lines (max 40).
- recompiler.py: function '_struct_ctx' has 86 lines (max 40).
- recompiler.py: function 'recompile' has 69 lines (max 40).
- setuptools_ext.py: function 'add_cffi_module' has 45 lines (max 40).
- setuptools_ext.py: function '_set_py_limited_api' has 45 lines (max 40).
- vengine_cpy.py: function 'write_source_to_f' has 94 lines (max 40).
- vengine_cpy.py: function 'load_library' has 41 lines (max 40).
- vengine_cpy.py: function '_generate_cpy_function_decl' has 80 lines (max 40).
- vengine_cpy.py: function '_generate_struct_or_union_decl' has 51 lines (max 40).
- vengine_cpy.py: function '_generate_cpy_const' has 48 lines (max 40).
- vengine_gen.py: function '_generate_gen_function_decl' has 45 lines (max 40).
- vengine_gen.py: function '_generate_struct_or_union_decl' has 49 lines (max 40).
- verifier.py: function '__init__' has 41 lines (max 40).
- _imp_emulation.py: function 'find_module' has 41 lines (max 40).
- core.py: function '__init__' has 176 lines (max 40).
- core.py: function 'invoke' has 56 lines (max 40).
- core.py: function '__init__' has 44 lines (max 40).
- core.py: function 'shell_complete' has 47 lines (max 40).
- core.py: function 'main' has 113 lines (max 40).
- core.py: function '__init__' has 48 lines (max 40).
- core.py: function '__init__' has 77 lines (max 40).
- core.py: function 'consume_value' has 48 lines (max 40).
- core.py: function 'process_value' has 66 lines (max 40).
- core.py: function 'resolve_envvar_value' has 45 lines (max 40).
- core.py: function 'handle_parse_result' has 88 lines (max 40).
- core.py: function '__init__' has 167 lines (max 40).
- core.py: function '_parse_decls' has 61 lines (max 40).
- core.py: function 'get_help_extra' has 84 lines (max 40).
- core.py: function 'prompt_for_value' has 50 lines (max 40).
- core.py: function 'value_from_envvar' has 42 lines (max 40).
- core.py: function 'consume_value' has 62 lines (max 40).
- decorators.py: function 'command' has 49 lines (max 40).
- decorators.py: function 'version_option' has 63 lines (max 40).
- formatting.py: function 'wrap_text' has 47 lines (max 40).
- formatting.py: function 'write_usage' has 46 lines (max 40).
- formatting.py: function 'write_dl' has 44 lines (max 40).
- shell_completion.py: function '_resolve_context' has 61 lines (max 40).
- shell_completion.py: function '_resolve_incomplete' has 45 lines (max 40).
- termui.py: function 'prompt' has 62 lines (max 40).
- termui.py: function 'confirm' has 59 lines (max 40).
- termui.py: function 'progressbar' has 159 lines (max 40).
- termui.py: function 'style' has 129 lines (max 40).
- termui.py: function 'edit' has 58 lines (max 40).
- testing.py: function 'isolation' has 76 lines (max 40).
- testing.py: function 'invoke' has 145 lines (max 40).
- types.py: function 'convert' has 47 lines (max 40).
- types.py: function 'convert' has 73 lines (max 40).
- types.py: function 'convert_type' has 55 lines (max 40).
- utils.py: function 'make_default_short_help' has 53 lines (max 40).
- utils.py: function 'echo' has 103 lines (max 40).
- utils.py: function 'open_file' has 49 lines (max 40).
- utils.py: function 'format_filename' has 42 lines (max 40).
- utils.py: function 'get_app_dir' has 49 lines (max 40).
- utils.py: function '_detect_program_name' has 55 lines (max 40).
- utils.py: function '_expand_args' has 50 lines (max 40).
- _compat.py: function '_force_correct_text_stream' has 46 lines (max 40).
- _compat.py: function 'open_stream' has 81 lines (max 40).
- _termui_impl.py: function '__init__' has 71 lines (max 40).
- _termui_impl.py: function 'render_progress' has 46 lines (max 40).
- _termui_impl.py: function '_pipepager' has 103 lines (max 40).
- _termui_impl.py: function '_tempfilepager' has 50 lines (max 40).
- _termui_impl.py: function 'edit' has 48 lines (max 40).
- _termui_impl.py: function 'getchar' has 46 lines (max 40).
- _textwrap.py: function '_wrap_chunks' has 98 lines (max 40).
- __init__.py: function '__getattr__' has 50 lines (max 40).
- ansitowin32.py: function 'get_win32_calls' has 44 lines (max 40).
- asn1.py: function '_normalize_field_type' has 157 lines (max 40).
- asn1.py: function '_type_to_variant' has 43 lines (max 40).
- keywrap.py: function 'aes_key_unwrap_with_padding' has 46 lines (max 40).
- rsa.py: function 'rsa_recover_prime_factors' has 46 lines (max 40).
- pkcs7.py: function 'add_signer' has 43 lines (max 40).
- pkcs7.py: function 'sign' has 55 lines (max 40).
- pkcs7.py: function 'encrypt' has 50 lines (max 40).
- pkcs7.py: function '_smime_signed_encode' has 48 lines (max 40).
- ssh.py: function 'load_ssh_private_key' has 114 lines (max 40).
- ssh.py: function '_serialize_ssh_private_key' has 77 lines (max 40).
- ssh.py: function '__init__' has 41 lines (max 40).
- ssh.py: function '_load_ssh_public_identity' has 95 lines (max 40).
- ssh.py: function 'sign' has 136 lines (max 40).
- base.py: function 'public_key' has 53 lines (max 40).
- base.py: function 'sign' has 51 lines (max 40).
- extensions.py: function '__init__' has 58 lines (max 40).
- extensions.py: function '__init__' has 42 lines (max 40).
- extensions.py: function '__init__' has 85 lines (max 40).
- extensions.py: function '__init__' has 45 lines (max 40).
- name.py: function '__init__' has 53 lines (max 40).
- ocsp.py: function '__init__' has 57 lines (max 40).
- ocsp.py: function 'add_response_by_hash' has 46 lines (max 40).
- btree.py: function 'delete' has 47 lines (max 40).
- btreezone.py: function 'bounds' has 69 lines (max 40).
- dnssec.py: function 'make_ds' has 77 lines (max 40).
- dnssec.py: function '_validate_rrsig' has 70 lines (max 40).
- dnssec.py: function '_validate' has 73 lines (max 40).
- dnssec.py: function '_sign' has 127 lines (max 40).
- dnssec.py: function '_make_rrsig_signature_data' has 67 lines (max 40).
- dnssec.py: function 'nsec3_hash' has 61 lines (max 40).
- dnssec.py: function 'make_ds_rdataset' has 58 lines (max 40).
- dnssec.py: function 'default_rrset_signer' has 42 lines (max 40).
- dnssec.py: function 'sign_zone' has 115 lines (max 40).
- edns.py: function '__init__' has 47 lines (max 40).
- edns.py: function 'from_text' has 54 lines (max 40).
- grange.py: function 'from_text' has 48 lines (max 40).
- ipv6.py: function 'inet_ntoa' has 69 lines (max 40).
- ipv6.py: function 'inet_aton' has 91 lines (max 40).
- message.py: function 'to_text' has 41 lines (max 40).
- message.py: function 'find_rrset' has 85 lines (max 40).
- message.py: function 'get_rrset' has 67 lines (max 40).
- message.py: function 'to_wire' has 102 lines (max 40).
- message.py: function 'use_tsig' has 72 lines (max 40).
- message.py: function 'use_edns' has 53 lines (max 40).
- message.py: function 'resolve_chaining' has 76 lines (max 40).
- message.py: function '_get_section' has 101 lines (max 40).
- message.py: function 'from_wire' has 75 lines (max 40).
- message.py: function '_header_line' has 41 lines (max 40).
- message.py: function '_rr_line' has 76 lines (max 40).
- message.py: function 'read' has 46 lines (max 40).
- message.py: function 'from_text' has 48 lines (max 40).
- message.py: function 'make_query' has 99 lines (max 40).
- message.py: function 'make_response' has 91 lines (max 40).
- name.py: function 'fullcompare' has 76 lines (max 40).
- name.py: function 'to_wire' has 87 lines (max 40).
- name.py: function 'from_unicode' has 77 lines (max 40).
- name.py: function 'from_text' has 90 lines (max 40).
- name.py: function '_absolute_successor' has 62 lines (max 40).
- node.py: function 'find_rdataset' has 41 lines (max 40).
- query.py: function 'connect_tcp' has 41 lines (max 40).
- query.py: function '_destination_and_source' has 44 lines (max 40).
- query.py: function 'make_ssl_socket' has 43 lines (max 40).
- query.py: function 'https' has 207 lines (max 40).
- query.py: function '_http3' has 61 lines (max 40).
- query.py: function 'receive_udp' has 106 lines (max 40).
- query.py: function 'udp' has 92 lines (max 40).
- query.py: function 'udp_with_fallback' has 88 lines (max 40).
- query.py: function 'receive_tcp' has 47 lines (max 40).
- query.py: function 'tcp' has 70 lines (max 40).
- query.py: function 'tls' has 108 lines (max 40).
- query.py: function 'quic' has 97 lines (max 40).
- query.py: function '_inbound_xfr' has 52 lines (max 40).
- query.py: function 'xfr' has 70 lines (max 40).
- query.py: function 'inbound_xfr' has 74 lines (max 40).
- rdata.py: function '_cmp' has 50 lines (max 40).
- rdata.py: function 'replace' has 45 lines (max 40).
- rdata.py: function 'from_text' has 93 lines (max 40).
- rdataset.py: function 'to_text' has 74 lines (max 40).
- rdataset.py: function 'to_wire' has 56 lines (max 40).
- resolver.py: function 'next_request' has 75 lines (max 40).
- resolver.py: function 'query_result' has 125 lines (max 40).
- resolver.py: function 'read_resolv_conf' has 71 lines (max 40).
- resolver.py: function '_get_qnames_to_try' has 41 lines (max 40).
- resolver.py: function 'resolve' has 102 lines (max 40).
- resolver.py: function 'resolve_name' has 67 lines (max 40).
- resolver.py: function 'zone_for_name' has 85 lines (max 40).
- resolver.py: function 'resolve_at' has 46 lines (max 40).
- resolver.py: function '_getaddrinfo' has 86 lines (max 40).
- resolver.py: function '_getnameinfo' has 43 lines (max 40).
- rrset.py: function 'from_text_list' has 43 lines (max 40).
- tokenizer.py: function 'unescape_to_bytes' has 63 lines (max 40).
- tokenizer.py: function '__init__' has 49 lines (max 40).
- tokenizer.py: function 'get' has 111 lines (max 40).
- transaction.py: function '_add' has 45 lines (max 40).
- transaction.py: function '_delete' has 64 lines (max 40).
- ttl.py: function 'from_text' has 50 lines (max 40).
- update.py: function '__init__' has 43 lines (max 40).
- update.py: function 'delete' has 60 lines (max 40).
- update.py: function 'present' has 53 lines (max 40).
- versioned.py: function 'writer' has 49 lines (max 40).
- win32util.py: function '_is_nic_enabled' has 52 lines (max 40).
- win32util.py: function 'get' has 100 lines (max 40).
- xfr.py: function 'process_message' has 151 lines (max 40).
- xfr.py: function 'make_query' has 75 lines (max 40).
- zone.py: function 'find_rdataset' has 47 lines (max 40).
- zone.py: function 'get_rdataset' has 48 lines (max 40).
- zone.py: function 'find_rrset' has 52 lines (max 40).
- zone.py: function 'get_rrset' has 46 lines (max 40).
- zone.py: function 'to_file' has 89 lines (max 40).
- zone.py: function '_from_text' has 42 lines (max 40).
- zone.py: function 'from_text' has 74 lines (max 40).
- zone.py: function 'from_file' has 83 lines (max 40).
- zone.py: function 'from_xfr' has 54 lines (max 40).
- zonefile.py: function '__init__' has 50 lines (max 40).
- zonefile.py: function '_rr_line' has 124 lines (max 40).
- zonefile.py: function '_parse_modify' has 45 lines (max 40).
- zonefile.py: function '_generate_line' has 71 lines (max 40).
- zonefile.py: function 'read' has 99 lines (max 40).
- zonefile.py: function 'read_rrsets' has 94 lines (max 40).
- _ddr.py: function '_extract_nameservers_from_svcb' has 52 lines (max 40).
- _common.py: function '_connect' has 56 lines (max 40).
- _sync.py: function '_handle_events' has 42 lines (max 40).
- svcbbase.py: function 'from_text' has 41 lines (max 40).
- LOC.py: function 'from_text' has 96 lines (max 40).
- TSIG.py: function '__init__' has 42 lines (max 40).
- applications.py: function '__init__' has 962 lines (max 40).
- applications.py: function 'build_middleware_stack' has 50 lines (max 40).
- applications.py: function 'setup' has 55 lines (max 40).
- applications.py: function 'add_api_route' has 57 lines (max 40).
- applications.py: function 'frontend' has 73 lines (max 40).
- applications.py: function 'websocket' has 54 lines (max 40).
- applications.py: function 'include_router' has 205 lines (max 40).
- applications.py: function 'get' has 343 lines (max 40).
- applications.py: function 'put' has 348 lines (max 40).
- applications.py: function 'post' has 348 lines (max 40).
- applications.py: function 'delete' has 343 lines (max 40).
- applications.py: function 'options' has 343 lines (max 40).
- applications.py: function 'head' has 343 lines (max 40).
- applications.py: function 'patch' has 348 lines (max 40).
- applications.py: function 'trace' has 343 lines (max 40).
- encoders.py: function 'jsonable_encoder' has 236 lines (max 40).
- exceptions.py: function '__init__' has 41 lines (max 40).
- params.py: function '__init__' has 104 lines (max 40).
- params.py: function '__init__' has 81 lines (max 40).
- params.py: function '__init__' has 79 lines (max 40).
- params.py: function '__init__' has 81 lines (max 40).
- params.py: function '__init__' has 79 lines (max 40).
- params.py: function '__init__' has 107 lines (max 40).
- params.py: function '__init__' has 81 lines (max 40).
- params.py: function '__init__' has 81 lines (max 40).
- param_functions.py: function 'Path' has 344 lines (max 40).
- param_functions.py: function 'Query' has 344 lines (max 40).
- param_functions.py: function 'Header' has 317 lines (max 40).
- param_functions.py: function 'Cookie' has 305 lines (max 40).
- param_functions.py: function 'Body' has 330 lines (max 40).
- param_functions.py: function 'Form' has 315 lines (max 40).
- param_functions.py: function 'File' has 315 lines (max 40).
- param_functions.py: function 'Depends' has 89 lines (max 40).
- param_functions.py: function 'Security' has 89 lines (max 40).
- routing.py: function 'request_response' has 44 lines (max 40).
- routing.py: function 'get_request_handler' has 120 lines (max 40).
- routing.py: function '_populate_api_route_state' has 167 lines (max 40).
- routing.py: function '__init__' has 64 lines (max 40).
- routing.py: function 'from_api_route' has 53 lines (max 40).
- routing.py: function '_build_effective_context' has 75 lines (max 40).
- routing.py: function '__init__' has 288 lines (max 40).
- routing.py: function 'frontend' has 80 lines (max 40).
- routing.py: function '_match_low_priority' has 46 lines (max 40).
- routing.py: function 'add_api_route' has 84 lines (max 40).
- routing.py: function 'websocket' has 59 lines (max 40).
- routing.py: function 'include_router' has 128 lines (max 40).
- routing.py: function 'get' has 344 lines (max 40).
- routing.py: function 'put' has 349 lines (max 40).
- routing.py: function 'post' has 349 lines (max 40).
- routing.py: function 'delete' has 344 lines (max 40).
- routing.py: function 'options' has 344 lines (max 40).
- routing.py: function 'head' has 349 lines (max 40).
- routing.py: function 'patch' has 349 lines (max 40).
- routing.py: function 'trace' has 349 lines (max 40).
- sse.py: function 'format_sse_event' has 72 lines (max 40).
- utils.py: function 'get_flat_dependant' has 54 lines (max 40).
- utils.py: function 'get_dependant' has 76 lines (max 40).
- utils.py: function 'analyze_param' has 169 lines (max 40).
- utils.py: function 'request_params_to_args' has 89 lines (max 40).
- utils.py: function 'get_body_field' has 54 lines (max 40).
- docs.py: function 'get_swagger_ui_html' has 157 lines (max 40).
- docs.py: function 'get_redoc_html' has 104 lines (max 40).
- docs.py: function 'get_swagger_ui_oauth2_redirect_html' has 89 lines (max 40).
- utils.py: function '_get_openapi_operation_parameters' has 73 lines (max 40).
- utils.py: function 'get_openapi_path' has 221 lines (max 40).
- utils.py: function 'get_openapi' has 95 lines (max 40).
- api_key.py: function '__init__' has 55 lines (max 40).
- api_key.py: function '__init__' has 51 lines (max 40).
- api_key.py: function '__init__' has 51 lines (max 40).
- http.py: function '__init__' has 57 lines (max 40).
- http.py: function '__init__' has 49 lines (max 40).
- http.py: function '__init__' has 47 lines (max 40).
- oauth2.py: function '__init__' has 103 lines (max 40).
- oauth2.py: function '__init__' has 104 lines (max 40).
- oauth2.py: function '__init__' has 58 lines (max 40).
- oauth2.py: function '__init__' has 94 lines (max 40).
- oauth2.py: function '__init__' has 89 lines (max 40).
- open_id_connect_url.py: function '__init__' has 58 lines (max 40).
- grid_file.py: function '__init__' has 41 lines (max 40).
- grid_file.py: function 'find' has 60 lines (max 40).
- grid_file.py: function '__init__' has 63 lines (max 40).
- grid_file.py: function 'open_upload_stream' has 54 lines (max 40).
- grid_file.py: function 'open_upload_stream_with_id' has 60 lines (max 40).
- grid_file.py: function 'find' has 47 lines (max 40).
- grid_file.py: function '__init__' has 88 lines (max 40).
- grid_file.py: function '__init__' has 62 lines (max 40).
- grid_file.py: function '__init__' has 41 lines (max 40).
- grid_file.py: function 'get_version' has 59 lines (max 40).
- grid_file.py: function 'find' has 60 lines (max 40).
- grid_file.py: function 'exists' has 51 lines (max 40).
- grid_file.py: function '__init__' has 63 lines (max 40).
- grid_file.py: function 'open_upload_stream' has 54 lines (max 40).
- grid_file.py: function 'open_upload_stream_with_id' has 60 lines (max 40).
- grid_file.py: function 'upload_from_stream' has 47 lines (max 40).
- grid_file.py: function 'upload_from_stream_with_id' has 49 lines (max 40).
- grid_file.py: function 'find' has 47 lines (max 40).
- grid_file.py: function 'open_download_stream_by_name' has 54 lines (max 40).
- grid_file.py: function 'download_to_stream_by_name' has 50 lines (max 40).
- grid_file.py: function '__init__' has 88 lines (max 40).
- grid_file.py: function 'write' has 61 lines (max 40).
- grid_file.py: function '__init__' has 62 lines (max 40).
- grid_file.py: function '_read_size_or_line' has 51 lines (max 40).
- _connection.py: function '_body_framing' has 58 lines (max 40).
- _connection.py: function '_process_event' has 48 lines (max 40).
- _connection.py: function 'receive_data' has 46 lines (max 40).
- _connection.py: function 'next_event' has 65 lines (max 40).
- _connection.py: function '_clean_up_response_headers_for_sending' has 58 lines (max 40).
- _events.py: function '__init__' has 43 lines (max 40).
- _headers.py: function 'normalize_and_validate' has 57 lines (max 40).
- _headers.py: function 'get_comma_header' has 47 lines (max 40).
- _readers.py: function '__call__' has 50 lines (max 40).
- _receivebuffer.py: function 'maybe_extract_lines' has 43 lines (max 40).
- cli.py: function '_build_parser' has 50 lines (max 40).
- core.py: function 'check_bidi' has 75 lines (max 40).
- core.py: function 'valid_contextj' has 54 lines (max 40).
- core.py: function 'valid_contexto' has 49 lines (max 40).
- core.py: function 'check_label' has 55 lines (max 40).
- core.py: function 'ulabel' has 43 lines (max 40).
- core.py: function 'uts46_remap' has 56 lines (max 40).
- core.py: function 'encode' has 72 lines (max 40).
- core.py: function 'decode' has 67 lines (max 40).
- algorithms.py: function 'from_jwk' has 71 lines (max 40).
- algorithms.py: function 'to_jwk' has 43 lines (max 40).
- algorithms.py: function 'from_jwk' has 73 lines (max 40).
- algorithms.py: function 'to_jwk' has 46 lines (max 40).
- api_jwk.py: function '__init__' has 64 lines (max 40).
- api_jws.py: function 'encode' has 99 lines (max 40).
- api_jws.py: function 'decode_complete' has 66 lines (max 40).
- api_jws.py: function '_load' has 50 lines (max 40).
- api_jws.py: function '_verify_signature' has 52 lines (max 40).
- api_jwt.py: function 'encode' has 66 lines (max 40).
- api_jwt.py: function 'decode_complete' has 113 lines (max 40).
- api_jwt.py: function 'decode' has 79 lines (max 40).
- api_jwt.py: function '_validate_claims' has 42 lines (max 40).
- api_jwt.py: function '_validate_aud' has 50 lines (max 40).
- help.py: function 'info' has 45 lines (max 40).
- jwks_client.py: function '__init__' has 88 lines (max 40).
- apache.py: function '_load_lines' has 42 lines (max 40).
- apache.py: function '_decode_field' has 42 lines (max 40).
- apache.py: function '_init_default_schemes' has 41 lines (max 40).
- apache.py: function '_init_htpasswd_context' has 45 lines (max 40).
- context.py: function '_init_options' has 73 lines (max 40).
- context.py: function '_norm_context_option' has 43 lines (max 40).
- context.py: function 'get_scheme_options_with_flag' has 43 lines (max 40).
- context.py: function '_init_default_schemes' has 43 lines (max 40).
- context.py: function 'get_record' has 43 lines (max 40).
- context.py: function 'iter_config' has 55 lines (max 40).
- context.py: function 'load' has 115 lines (max 40).
- context.py: function 'update' has 69 lines (max 40).
- context.py: function 'default_scheme' has 49 lines (max 40).
- context.py: function 'handler' has 53 lines (max 40).
- context.py: function 'to_string' has 61 lines (max 40).
- context.py: function 'needs_update' has 69 lines (max 40).
- context.py: function 'identify' has 45 lines (max 40).
- context.py: function 'hash' has 56 lines (max 40).
- context.py: function 'verify' has 77 lines (max 40).
- context.py: function 'verify_and_update' has 97 lines (max 40).
- pwd.py: function '_self_info_rate' has 44 lines (max 40).
- pwd.py: function '_ensure_unique' has 46 lines (max 40).
- pwd.py: function 'genword' has 77 lines (max 40).
- pwd.py: function 'genphrase' has 121 lines (max 40).
- registry.py: function 'register_crypt_handler_path' has 42 lines (max 40).
- registry.py: function 'register_crypt_handler' has 53 lines (max 40).
- registry.py: function 'get_crypt_handler' has 75 lines (max 40).
- registry.py: function 'has_backend' has 62 lines (max 40).
- totp.py: function '__init__' has 41 lines (max 40).
- totp.py: function 'decrypt_key' has 51 lines (max 40).
- totp.py: function 'using' has 57 lines (max 40).
- totp.py: function '__init__' has 77 lines (max 40).
- totp.py: function 'normalize_token' has 45 lines (max 40).
- totp.py: function 'match' has 98 lines (max 40).
- totp.py: function '_find_match' has 56 lines (max 40).
- totp.py: function '_from_parsed_uri' has 48 lines (max 40).
- totp.py: function 'to_uri' has 77 lines (max 40).
- totp.py: function 'to_dict' has 53 lines (max 40).
- des.py: function '_load_tables' has 488 lines (max 40).
- des.py: function 'des_encrypt_block' has 56 lines (max 40).
- des.py: function 'des_encrypt_int_block' has 68 lines (max 40).
- digest.py: function 'lookup_hash' has 71 lines (max 40).
- digest.py: function 'compile_hmac' has 54 lines (max 40).
- digest.py: function 'pbkdf1' has 63 lines (max 40).
- digest.py: function 'pbkdf2_hmac' has 104 lines (max 40).
- _salsa.py: function 'salsa20' has 165 lines (max 40).
- __init__.py: function 'scrypt' has 51 lines (max 40).
- base.py: function '_init_constants' has 290 lines (max 40).
- unrolled.py: function 'encipher' has 68 lines (max 40).
- unrolled.py: function 'expand' has 683 lines (max 40).
- __init__.py: function 'raw_bcrypt' has 82 lines (max 40).
- utils.py: function 'django_to_passlib' has 85 lines (max 40).
- utils.py: function 'check_password' has 50 lines (max 40).
- utils.py: function 'install_patch' has 42 lines (max 40).
- utils.py: function '_load_settings' has 63 lines (max 40).
- utils.py: function 'must_update' has 101 lines (max 40).
- argon2.py: function 'using' has 59 lines (max 40).
- argon2.py: function '__init__' has 50 lines (max 40).
- argon2.py: function '_load_backend_mixin' has 49 lines (max 40).
- bcrypt.py: function 'assert_lacks_8bit_bug' has 42 lines (max 40).
- bcrypt.py: function '_norm_digest_args' has 92 lines (max 40).
- bcrypt.py: function '_calc_checksum' has 60 lines (max 40).
- bcrypt.py: function '_calc_checksum' has 43 lines (max 40).
- cisco.py: function '_calc_checksum' has 146 lines (max 40).
- md5_crypt.py: function '_raw_md5_crypt' has 148 lines (max 40).
- pbkdf2.py: function 'create_pbkdf2_hash' has 51 lines (max 40).
- scram.py: function 'from_string' has 47 lines (max 40).
- scram.py: function 'verify' has 203 lines (max 40).
- scrypt.py: function '_parse_scrypt_string' has 45 lines (max 40).
- sha2_crypt.py: function '_raw_sha2_crypt' has 193 lines (max 40).
- sha2_crypt.py: function 'from_string' has 44 lines (max 40).
- sun_md5_crypt.py: function 'raw_sun_md5_crypt' has 78 lines (max 40).
- sun_md5_crypt.py: function 'from_string' has 67 lines (max 40).
- windows.py: function 'raw' has 44 lines (max 40).
- test_apache.py: function 'test_13_whitespace' has 47 lines (max 40).
- test_apache.py: function 'test_05_load' has 41 lines (max 40).
- test_context.py: function 'test_10_load' has 43 lines (max 40).
- test_context.py: function 'test_41_genconfig' has 49 lines (max 40).
- test_context.py: function 'test_43_hash_legacy' has 49 lines (max 40).
- test_context.py: function 'test_45_verify' has 51 lines (max 40).
- test_context.py: function 'test_47_verify_and_update' has 58 lines (max 40).
- test_context.py: function 'test_48_context_kwds' has 85 lines (max 40).
- test_context.py: function 'test_50_rounds_limits' has 118 lines (max 40).
- test_context.py: function 'test_52_log2_vary_rounds' has 47 lines (max 40).
- test_context.py: function 'test_disabled_hashes' has 78 lines (max 40).
- test_crypto_des.py: function 'test_03_encrypt_bytes' has 46 lines (max 40).
- test_crypto_digest.py: function 'test_lookup_hash_ctor' has 46 lines (max 40).
- test_crypto_scrypt.py: function 'test_salsa' has 48 lines (max 40).
- test_crypto_scrypt.py: function 'test_other_backends' has 46 lines (max 40).
- test_ext_django.py: function '_modify_django_config' has 41 lines (max 40).
- test_ext_django.py: function 'test_none_hash_value' has 41 lines (max 40).
- test_ext_django.py: function '_do_test_available_scheme' has 126 lines (max 40).
- test_ext_django.py: function 'test_02_handler_wrapper' has 48 lines (max 40).
- test_handlers.py: function 'get_handler_case' has 42 lines (max 40).
- test_handlers_argon2.py: function 'test_data_parameter' has 58 lines (max 40).
- test_registry.py: function 'test_register_crypt_handler_path' has 48 lines (max 40).
- test_totp.py: function '_get_max_time_t' has 47 lines (max 40).
- test_totp.py: function 'test_secrets_types' has 50 lines (max 40).
- test_totp.py: function 'test_encrypt_key' has 41 lines (max 40).
- test_totp.py: function 'test_totp_token' has 43 lines (max 40).
- test_totp.py: function 'test_match_w_window' has 48 lines (max 40).
- test_totp.py: function 'test_match_w_reuse' has 41 lines (max 40).
- test_totp.py: function 'test_from_source' has 47 lines (max 40).
- test_totp.py: function 'test_from_uri' has 119 lines (max 40).
- test_totp.py: function 'test_to_uri' has 61 lines (max 40).
- test_totp.py: function 'test_from_dict' has 94 lines (max 40).
- test_totp.py: function 'test_to_dict' has 83 lines (max 40).
- test_utils.py: function 'test_saslprep' has 79 lines (max 40).
- test_utils.py: function 'test_utf8_truncate' has 122 lines (max 40).
- test_utils.py: function 'test_codec' has 47 lines (max 40).
- test_utils.py: function 'check_int_pair' has 48 lines (max 40).
- test_utils_handlers.py: function 'test_91_parsehash' has 56 lines (max 40).
- test_utils_handlers.py: function 'test_12_ident' has 47 lines (max 40).
- utils.py: function 'assertWarning' has 48 lines (max 40).
- utils.py: function 'getRandom' has 65 lines (max 40).
- utils.py: function 'test_02_config_workflow' has 41 lines (max 40).
- utils.py: function 'test_03_hash_workflow' has 55 lines (max 40).
- utils.py: function 'test_05_backends' has 44 lines (max 40).
- utils.py: function 'test_10_optional_salt_attributes' has 41 lines (max 40).
- utils.py: function 'test_13_max_salt_size' has 54 lines (max 40).
- utils.py: function 'test_using_salt_size' has 50 lines (max 40).
- utils.py: function '_create_using_rounds_helper' has 43 lines (max 40).
- utils.py: function 'test_has_rounds_using_w_min_rounds' has 56 lines (max 40).
- utils.py: function 'test_has_rounds_replace_w_max_rounds' has 60 lines (max 40).
- utils.py: function 'test_30_HasManyIdents' has 51 lines (max 40).
- utils.py: function 'test_secret_w_truncate_size' has 109 lines (max 40).
- utils.py: function 'test_70_hashes' has 44 lines (max 40).
- utils.py: function 'test_76_hash_border' has 48 lines (max 40).
- utils.py: function 'test_disable_and_enable' has 95 lines (max 40).
- utils.py: function 'test_82_crypt_support' has 47 lines (max 40).
- binary.py: function '_encode_bytes_big' has 43 lines (max 40).
- binary.py: function '_decode_bytes_big' has 42 lines (max 40).
- binary.py: function 'check_repair_unused' has 41 lines (max 40).
- handlers.py: function 'parse_mc3' has 75 lines (max 40).
- handlers.py: function '_clip_to_valid_salt_size' has 51 lines (max 40).
- handlers.py: function '_norm_salt' has 57 lines (max 40).
- handlers.py: function 'using' has 107 lines (max 40).
- handlers.py: function 'set_backend' has 83 lines (max 40).
- pbkdf2.py: function 'get_prf' has 47 lines (max 40).
- pbkdf2.py: function 'pbkdf2' has 45 lines (max 40).
- __init__.py: function 'update_mixin_classes' has 87 lines (max 40).
- __init__.py: function 'consteq' has 62 lines (max 40).
- __init__.py: function 'saslprep' has 128 lines (max 40).
- __init__.py: function 'utf8_truncate' has 51 lines (max 40).
- __init__.py: function 'safe_crypt' has 44 lines (max 40).
- __init__.py: function 'print_' has 45 lines (max 40).
- ast_transforms.py: function 'fix_switch_cases' has 86 lines (max 40).
- c_ast.py: function 'show' has 42 lines (max 40).
- c_generator.py: function '_generate_stmt' has 42 lines (max 40).
- c_generator.py: function '_generate_type' has 67 lines (max 40).
- c_lexer.py: function 'token' has 65 lines (max 40).
- c_lexer.py: function '_match_token' has 77 lines (max 40).
- c_lexer.py: function '_handle_pppragma' has 48 lines (max 40).
- c_parser.py: function '_lex_type_lookup_func' has 42 lines (max 40).
- c_parser.py: function '_type_modify_decl' has 44 lines (max 40).
- c_parser.py: function '_build_declarations' has 103 lines (max 40).
- c_parser.py: function '_parse_external_declaration' has 86 lines (max 40).
- c_parser.py: function '_parse_decl_body_with_spec' has 42 lines (max 40).
- c_parser.py: function '_parse_declaration_specifiers' has 123 lines (max 40).
- c_parser.py: function '_parse_specifier_qualifier_list' has 99 lines (max 40).
- c_parser.py: function '_parse_iteration_statement' has 42 lines (max 40).
- c_parser.py: function '_parse_postfix_expression' has 50 lines (max 40).
- _ast_gen.py: function 'show' has 41 lines (max 40).
- __init__.py: function 'parse_file' has 44 lines (max 40).
- color.py: function 'parse_str' has 59 lines (max 40).
- config.py: function 'with_config' has 47 lines (max 40).
- dataclasses.py: function 'dataclass' has 54 lines (max 40).
- dataclasses.py: function 'create_dataclass' has 102 lines (max 40).
- dataclasses.py: function 'rebuild_dataclass' has 61 lines (max 40).
- fields.py: function '__init__' has 62 lines (max 40).
- fields.py: function 'from_annotation' has 59 lines (max 40).
- fields.py: function 'from_annotated_attribute' has 100 lines (max 40).
- fields.py: function '_construct' has 91 lines (max 40).
- fields.py: function 'merge_field_infos' has 65 lines (max 40).
- fields.py: function 'Field' has 42 lines (max 40).
- fields.py: function 'Field' has 42 lines (max 40).
- fields.py: function 'Field' has 228 lines (max 40).
- functional_validators.py: function '__get_pydantic_core_schema__' has 41 lines (max 40).
- json_schema.py: function 'from_prioritized_choices' has 51 lines (max 40).
- json_schema.py: function '__init__' has 42 lines (max 40).
- json_schema.py: function 'generate_definitions' has 49 lines (max 40).
- json_schema.py: function 'generate' has 49 lines (max 40).
- json_schema.py: function 'get_decimal_pattern' has 41 lines (max 40).
- json_schema.py: function 'dict_schema' has 48 lines (max 40).
- json_schema.py: function 'default_schema' has 63 lines (max 40).
- json_schema.py: function '_extract_discriminator' has 45 lines (max 40).
- json_schema.py: function 'typed_dict_schema' has 51 lines (max 40).
- json_schema.py: function '_update_class_schema' has 81 lines (max 40).
- json_schema.py: function 'p_arguments_schema' has 43 lines (max 40).
- json_schema.py: function 'get_defs_ref' has 48 lines (max 40).
- json_schema.py: function 'model_json_schema' has 48 lines (max 40).
- json_schema.py: function 'models_json_schema' has 60 lines (max 40).
- main.py: function 'model_construct' has 76 lines (max 40).
- main.py: function 'model_dump' has 66 lines (max 40).
- main.py: function 'model_dump_json' has 68 lines (max 40).
- main.py: function 'model_rebuild' has 60 lines (max 40).
- main.py: function 'model_validate' has 48 lines (max 40).
- main.py: function 'model_validate_json' has 43 lines (max 40).
- main.py: function '__class_getitem__' has 67 lines (max 40).
- main.py: function '_setattr_handler' has 55 lines (max 40).
- main.py: function '__eq__' has 57 lines (max 40).
- main.py: function 'parse_raw' has 48 lines (max 40).
- main.py: function 'copy' has 72 lines (max 40).
- main.py: function 'create_model' has 103 lines (max 40).
- mypy.py: function 'expand_type' has 45 lines (max 40).
- mypy.py: function 'collect_config' has 76 lines (max 40).
- mypy.py: function 'collect_fields_and_class_vars' has 68 lines (max 40).
- mypy.py: function 'collect_field_or_class_var_from_stmt' has 137 lines (max 40).
- mypy.py: function 'add_initializer' has 57 lines (max 40).
- mypy.py: function 'add_method' has 88 lines (max 40).
- networks.py: function 'build' has 46 lines (max 40).
- networks.py: function 'validate_email' has 48 lines (max 40).
- types.py: function 'conint' has 87 lines (max 40).
- types.py: function 'confloat' has 89 lines (max 40).
- types.py: function 'constr' has 85 lines (max 40).
- types.py: function 'condecimal' has 97 lines (max 40).
- types.py: function '_convert_schema' has 79 lines (max 40).
- type_adapter.py: function '__init__' has 56 lines (max 40).
- type_adapter.py: function '_init_core_attrs' has 72 lines (max 40).
- type_adapter.py: function 'rebuild' has 46 lines (max 40).
- type_adapter.py: function 'validate_python' has 54 lines (max 40).
- type_adapter.py: function 'validate_json' has 50 lines (max 40).
- type_adapter.py: function 'validate_strings' has 47 lines (max 40).
- type_adapter.py: function 'dump_python' has 64 lines (max 40).
- type_adapter.py: function 'dump_json' has 71 lines (max 40).
- type_adapter.py: function 'json_schemas' has 66 lines (max 40).
- validate_call_decorator.py: function '_check_function_type' has 48 lines (max 40).
- version.py: function 'version_info' has 44 lines (max 40).
- _migration.py: function 'wrapper' has 52 lines (max 40).
- class_validators.py: function 'validator' has 56 lines (max 40).
- class_validators.py: function 'root_validator' has 44 lines (max 40).
- copy_internals.py: function '_iter' has 69 lines (max 40).
- copy_internals.py: function '_get_value' has 74 lines (max 40).
- decorator.py: function '__init__' has 68 lines (max 40).
- decorator.py: function 'build_values' has 43 lines (max 40).
- color.py: function 'parse_str' has 58 lines (max 40).
- decorator.py: function '__init__' has 67 lines (max 40).
- decorator.py: function 'build_values' has 43 lines (max 40).
- env_settings.py: function '__call__' has 47 lines (max 40).
- env_settings.py: function '__call__' has 41 lines (max 40).
- fields.py: function 'Field' has 113 lines (max 40).
- fields.py: function '__init__' has 43 lines (max 40).
- fields.py: function '_get_field_info' has 43 lines (max 40).
- fields.py: function '_type_analysis' has 177 lines (max 40).
- fields.py: function 'validate' has 48 lines (max 40).
- fields.py: function '_validate_sequence_like' has 57 lines (max 40).
- fields.py: function '_validate_singleton' has 47 lines (max 40).
- fields.py: function '_validate_discriminated_union' has 49 lines (max 40).
- generics.py: function 'replace_types' has 82 lines (max 40).
- main.py: function '__new__' has 51 lines (max 40).
- main.py: function '__setattr__' has 55 lines (max 40).
- main.py: function 'json' has 45 lines (max 40).
- main.py: function '_get_value' has 72 lines (max 40).
- main.py: function '_iter' has 56 lines (max 40).
- main.py: function 'create_model' has 77 lines (max 40).
- main.py: function 'validate_model' has 78 lines (max 40).
- mypy.py: function '_pydantic_field_callback' has 54 lines (max 40).
- mypy.py: function 'collect_fields' has 84 lines (max 40).
- mypy.py: function 'add_construct_method' has 58 lines (max 40).
- mypy.py: function 'add_method' has 83 lines (max 40).
- networks.py: function 'build' has 43 lines (max 40).
- networks.py: function 'validate_host' has 41 lines (max 40).
- networks.py: function '_build_url' has 48 lines (max 40).
- schema.py: function 'schema' has 53 lines (max 40).
- schema.py: function 'field_schema' has 51 lines (max 40).
- schema.py: function 'field_type_schema' has 119 lines (max 40).
- schema.py: function 'model_process_schema' has 50 lines (max 40).
- schema.py: function 'model_type_schema' has 54 lines (max 40).
- schema.py: function 'field_singleton_sub_fields_schema' has 93 lines (max 40).
- schema.py: function 'field_singleton_schema' has 128 lines (max 40).
- schema.py: function 'go' has 53 lines (max 40).
- typing.py: function 'convert_generics' has 41 lines (max 40).
- utils.py: function 'generate_model_signature' has 65 lines (max 40).
- utils.py: function 'get_discriminator_alias_and_values' has 41 lines (max 40).
- validators.py: function 'find_validators' has 70 lines (max 40).
- _config.py: function 'for_model' has 52 lines (max 40).
- _config.py: function 'core_config' has 76 lines (max 40).
- _core_metadata.py: function 'update_core_metadata' has 51 lines (max 40).
- _dataclasses.py: function 'patch_base_fields' has 86 lines (max 40).
- _decorators.py: function 'build' has 56 lines (max 40).
- _decorators.py: function '_decorator_infos_for_class' has 45 lines (max 40).
- _decorators_v1.py: function 'make_generic_v1_field_validator' has 41 lines (max 40).
- _discriminated_union.py: function '__init__' has 54 lines (max 40).
- _discriminated_union.py: function '_apply_to_root' has 67 lines (max 40).
- _discriminated_union.py: function '_handle_choice' has 55 lines (max 40).
- _discriminated_union.py: function '_infer_discriminator_values_for_choice' has 71 lines (max 40).
- _discriminated_union.py: function '_infer_discriminator_values_for_inner_schema' has 46 lines (max 40).
- _fields.py: function '_check_protected_namespaces' has 43 lines (max 40).
- _fields.py: function '_apply_alias_generator_to_field_info' has 50 lines (max 40).
- _fields.py: function 'collect_model_fields' has 212 lines (max 40).
- _fields.py: function 'rebuild_model_fields' has 47 lines (max 40).
- _fields.py: function '_recreate_field_info' has 44 lines (max 40).
- _fields.py: function 'collect_dataclass_fields' has 108 lines (max 40).
- _fields.py: function 'rebuild_dataclass_fields' has 46 lines (max 40).
- _generate_schema.py: function '_mapping_schema' has 46 lines (max 40).
- _generate_schema.py: function '_model_schema' has 139 lines (max 40).
- _generate_schema.py: function '_generate_schema_from_get_schema_method' has 59 lines (max 40).
- _generate_schema.py: function 'match_type' has 122 lines (max 40).
- _generate_schema.py: function '_match_generic_type' has 51 lines (max 40).
- _generate_schema.py: function '_typed_dict_schema' has 139 lines (max 40).
- _generate_schema.py: function '_namedtuple_schema' has 46 lines (max 40).
- _generate_schema.py: function '_generate_parameter_schema' has 45 lines (max 40).
- _generate_schema.py: function '_generate_parameter_v3_schema' has 50 lines (max 40).
- _generate_schema.py: function '_dataclass_schema' has 122 lines (max 40).
- _generate_schema.py: function '_arguments_schema' has 75 lines (max 40).
- _generate_schema.py: function '_arguments_v3_schema' has 68 lines (max 40).
- _generate_schema.py: function '_computed_field_schema' has 50 lines (max 40).
- _generate_schema.py: function '_apply_single_annotation' has 116 lines (max 40).
- _generate_schema.py: function '_apply_field_serializers' has 56 lines (max 40).
- _generate_schema.py: function '_apply_model_serializers' has 48 lines (max 40).
- _generate_schema.py: function 'apply_model_validators' has 47 lines (max 40).
- _generate_schema.py: function 'finalize_schema' has 58 lines (max 40).
- _generics.py: function 'create_generic_submodel' has 47 lines (max 40).
- _generics.py: function 'replace_types' has 100 lines (max 40).
- _generics.py: function 'map_generic_model_arguments' has 53 lines (max 40).
- _known_annotated_metadata.py: function 'apply_known_metadata' has 62 lines (max 40).
- _known_annotated_metadata.py: function 'collect_known_metadata' has 45 lines (max 40).
- _model_construction.py: function '__new__' has 58 lines (max 40).
- _model_construction.py: function 'inspect_namespace' has 137 lines (max 40).
- _model_construction.py: function 'complete_model_class' has 124 lines (max 40).
- _namespace_utils.py: function 'types_namespace' has 50 lines (max 40).
- _schema_gather.py: function 'traverse_schema' has 99 lines (max 40).
- _signature.py: function '_generate_signature_parameters' has 84 lines (max 40).
- _typing_extra.py: function 'get_model_type_hints' has 59 lines (max 40).
- _typing_extra.py: function 'eval_type_backport' has 46 lines (max 40).
- _typing_extra.py: function 'get_function_type_hints' has 42 lines (max 40).
- _typing_extra.py: function 'get_type_hints' has 124 lines (max 40).
- _validate_call.py: function '_create_validators' has 41 lines (max 40).
- _validators.py: function '_import_string_logic' has 52 lines (max 40).
- _validators.py: function '_extract_decimal_digits_info' has 43 lines (max 40).
- core_schema.py: function 'int_schema' has 48 lines (max 40).
- core_schema.py: function 'float_schema' has 51 lines (max 40).
- core_schema.py: function 'decimal_schema' has 58 lines (max 40).
- core_schema.py: function 'str_schema' has 62 lines (max 40).
- core_schema.py: function 'date_schema' has 52 lines (max 40).
- core_schema.py: function 'time_schema' has 52 lines (max 40).
- core_schema.py: function 'datetime_schema' has 60 lines (max 40).
- core_schema.py: function 'timedelta_schema' has 49 lines (max 40).
- core_schema.py: function 'enum_schema' has 51 lines (max 40).
- core_schema.py: function 'list_schema' has 46 lines (max 40).
- core_schema.py: function 'tuple_positional_schema' has 49 lines (max 40).
- core_schema.py: function 'tuple_variable_schema' has 44 lines (max 40).
- core_schema.py: function 'tuple_schema' has 51 lines (max 40).
- core_schema.py: function 'set_schema' has 47 lines (max 40).
- core_schema.py: function 'frozenset_schema' has 47 lines (max 40).
- core_schema.py: function 'dict_schema' has 51 lines (max 40).
- core_schema.py: function 'with_default_schema' has 56 lines (max 40).
- core_schema.py: function 'union_schema' has 51 lines (max 40).
- core_schema.py: function 'tagged_union_schema' has 83 lines (max 40).
- core_schema.py: function 'json_or_python_schema' has 48 lines (max 40).
- core_schema.py: function 'typed_dict_schema' has 64 lines (max 40).
- core_schema.py: function 'model_fields_schema' has 57 lines (max 40).
- core_schema.py: function 'model_schema' has 85 lines (max 40).
- core_schema.py: function 'dataclass_field' has 57 lines (max 40).
- core_schema.py: function 'dataclass_args_schema' has 51 lines (max 40).
- core_schema.py: function 'dataclass_schema' has 59 lines (max 40).
- core_schema.py: function 'arguments_schema' has 56 lines (max 40).
- core_schema.py: function 'arguments_v3_schema' has 51 lines (max 40).
- core_schema.py: function 'call_schema' has 54 lines (max 40).
- core_schema.py: function 'custom_error_schema' has 46 lines (max 40).
- core_schema.py: function 'json_schema' has 46 lines (max 40).
- core_schema.py: function 'url_schema' has 55 lines (max 40).
- core_schema.py: function 'multi_host_url_schema' has 55 lines (max 40).
- auth_shared.py: function '_build_credentials_tuple' has 127 lines (max 40).
- bulk_shared.py: function '_merge_command' has 44 lines (max 40).
- client_options.py: function '_parse_ssl_options' has 62 lines (max 40).
- client_options.py: function '_parse_pool_options' has 48 lines (max 40).
- client_options.py: function '__init__' has 44 lines (max 40).
- common.py: function 'validate_auth_mechanism_properties' has 55 lines (max 40).
- compression_support.py: function 'validate_compressors' has 43 lines (max 40).
- encryption_options.py: function '__init__' has 202 lines (max 40).
- helpers_shared.py: function '_check_command_response' has 72 lines (max 40).
- message.py: function '_gen_find_command' has 55 lines (max 40).
- message.py: function '_batched_op_msg_impl' has 68 lines (max 40).
- message.py: function '_client_construct_op_msg' has 48 lines (max 40).
- message.py: function '_batched_write_command_impl' has 75 lines (max 40).
- message.py: function 'raw_response' has 44 lines (max 40).
- message.py: function 'get_message' has 53 lines (max 40).
- monitoring.py: function 'publish_command_success' has 49 lines (max 40).
- monitoring.py: function 'publish_command_failure' has 44 lines (max 40).
- network_layer.py: function 'receive_data' has 63 lines (max 40).
- network_layer.py: function 'buffer_updated' has 59 lines (max 40).
- network_layer.py: function 'receive_message' has 41 lines (max 40).
- ocsp_support.py: function '_verify_response_signature' has 54 lines (max 40).
- ocsp_support.py: function '_get_ocsp_response' has 45 lines (max 40).
- ocsp_support.py: function '_ocsp_callback' has 98 lines (max 40).
- operations.py: function '__init__' has 56 lines (max 40).
- operations.py: function '__init__' has 49 lines (max 40).
- operations.py: function '__init__' has 44 lines (max 40).
- operations.py: function '__init__' has 70 lines (max 40).
- periodic_executor.py: function 'open' has 41 lines (max 40).
- pool_options.py: function '_truncate_metadata' has 59 lines (max 40).
- pool_options.py: function '__init__' has 70 lines (max 40).
- pool_shared.py: function '_create_connection' has 70 lines (max 40).
- pool_shared.py: function '_configured_socket' has 49 lines (max 40).
- pool_shared.py: function '_configured_socket_interface' has 47 lines (max 40).
- pyopenssl_context.py: function 'wrap_socket' has 50 lines (max 40).
- saslprep.py: function 'saslprep' has 60 lines (max 40).
- server_description.py: function '__init__' has 47 lines (max 40).
- socket_checker.py: function 'select' has 42 lines (max 40).
- ssl_support.py: function 'get_ssl_context' has 50 lines (max 40).
- topology_description.py: function '__init__' has 51 lines (max 40).
- topology_description.py: function '_init_incompatible_err' has 47 lines (max 40).
- topology_description.py: function 'apply_selector' has 79 lines (max 40).
- topology_description.py: function 'updated_topology_description' has 104 lines (max 40).
- topology_description.py: function '_updated_topology_description_srv_polling' has 43 lines (max 40).
- topology_description.py: function '_update_rs_from_primary' has 88 lines (max 40).
- uri_parser_shared.py: function 'parse_host' has 52 lines (max 40).
- uri_parser_shared.py: function 'split_options' has 45 lines (max 40).
- uri_parser_shared.py: function '_validate_uri' has 96 lines (max 40).
- write_concern.py: function '__init__' has 41 lines (max 40).
- __init__.py: function 'timeout' has 57 lines (max 40).
- aggregation.py: function '__init__' has 55 lines (max 40).
- change_stream.py: function '__init__' has 55 lines (max 40).
- client_session.py: function '__init__' has 41 lines (max 40).
- client_session.py: function '_apply_to' has 44 lines (max 40).
- collection.py: function '__init__' has 128 lines (max 40).
- collection.py: function 'with_options' has 45 lines (max 40).
- collection.py: function 'find' has 197 lines (max 40).
- command_cursor.py: function '__init__' has 42 lines (max 40).
- cursor.py: function '__init__' has 152 lines (max 40).
- cursor.py: function '_clone' has 42 lines (max 40).
- cursor.py: function '_query_spec' has 50 lines (max 40).
- cursor.py: function '__getitem__' has 84 lines (max 40).
- cursor.py: function 'sort' has 48 lines (max 40).
- cursor.py: function 'where' has 42 lines (max 40).
- database.py: function '__init__' has 77 lines (max 40).
- database.py: function 'with_options' has 46 lines (max 40).
- database.py: function 'get_collection' has 54 lines (max 40).
- encryption.py: function '__init__' has 139 lines (max 40).
- mongo_client.py: function '__init__' has 725 lines (max 40).
- mongo_client.py: function 'get_default_database' has 60 lines (max 40).
- mongo_client.py: function 'get_database' has 59 lines (max 40).
- pool.py: function '__init__' has 59 lines (max 40).
- pool.py: function '__init__' has 86 lines (max 40).
- settings.py: function '__init__' has 54 lines (max 40).
- topology.py: function '__init__' has 111 lines (max 40).
- topology.py: function '_error_message' has 58 lines (max 40).
- aggregation.py: function '__init__' has 55 lines (max 40).
- aggregation.py: function 'get_cursor' has 73 lines (max 40).
- auth.py: function '_authenticate_scram' has 83 lines (max 40).
- auth.py: function '_authenticate_gssapi' has 110 lines (max 40).
- auth_oidc.py: function '_get_access_token' has 61 lines (max 40).
- bulk.py: function 'write_command' has 85 lines (max 40).
- bulk.py: function 'unack_write' has 88 lines (max 40).
- bulk.py: function '_execute_command' has 103 lines (max 40).
- change_stream.py: function '__init__' has 55 lines (max 40).
- change_stream.py: function 'try_next' has 95 lines (max 40).
- client_bulk.py: function 'write_command' has 91 lines (max 40).
- client_bulk.py: function 'unack_write' has 89 lines (max 40).
- client_bulk.py: function '_process_results_cursor' has 52 lines (max 40).
- client_bulk.py: function '_execute_command' has 139 lines (max 40).
- client_bulk.py: function 'execute_command_unack' has 42 lines (max 40).
- client_session.py: function '__init__' has 41 lines (max 40).
- client_session.py: function 'commit_transaction' has 43 lines (max 40).
- client_session.py: function '_apply_to' has 44 lines (max 40).
- collection.py: function '__init__' has 130 lines (max 40).
- collection.py: function 'with_options' has 45 lines (max 40).
- collection.py: function 'watch' has 141 lines (max 40).
- collection.py: function '_command' has 58 lines (max 40).
- collection.py: function 'bulk_write' has 97 lines (max 40).
- collection.py: function 'insert_one' has 64 lines (max 40).
- collection.py: function 'insert_many' has 58 lines (max 40).
- collection.py: function '_update' has 96 lines (max 40).
- collection.py: function 'replace_one' has 109 lines (max 40).
- collection.py: function 'update_one' has 120 lines (max 40).
- collection.py: function 'update_many' has 101 lines (max 40).
- collection.py: function 'drop' has 43 lines (max 40).
- collection.py: function '_delete' has 56 lines (max 40).
- collection.py: function 'delete_one' has 65 lines (max 40).
- collection.py: function 'delete_many' has 65 lines (max 40).
- collection.py: function 'find' has 197 lines (max 40).
- collection.py: function 'count_documents' has 74 lines (max 40).
- collection.py: function 'create_indexes' has 47 lines (max 40).
- collection.py: function 'create_index' has 118 lines (max 40).
- collection.py: function 'drop_index' has 48 lines (max 40).
- collection.py: function 'index_information' has 42 lines (max 40).
- collection.py: function 'list_search_indexes' has 61 lines (max 40).
- collection.py: function 'options' has 44 lines (max 40).
- collection.py: function 'aggregate' has 104 lines (max 40).
- collection.py: function 'aggregate_raw_batches' has 47 lines (max 40).
- collection.py: function 'rename' has 53 lines (max 40).
- collection.py: function 'distinct' has 61 lines (max 40).
- collection.py: function '_find_and_modify_helper' has 46 lines (max 40).
- collection.py: function 'find_one_and_delete' has 93 lines (max 40).
- collection.py: function 'find_one_and_replace' has 119 lines (max 40).
- collection.py: function 'find_one_and_update' has 152 lines (max 40).
- command_cursor.py: function '__init__' has 42 lines (max 40).
- command_cursor.py: function '_send_message' has 44 lines (max 40).
- cursor.py: function '__init__' has 152 lines (max 40).
- cursor.py: function '_clone' has 42 lines (max 40).
- cursor.py: function '_query_spec' has 50 lines (max 40).
- cursor.py: function '__getitem__' has 82 lines (max 40).
- cursor.py: function 'sort' has 48 lines (max 40).
- cursor.py: function 'where' has 42 lines (max 40).
- cursor.py: function '_send_message' has 83 lines (max 40).
- cursor.py: function '_refresh' has 64 lines (max 40).
- database.py: function '__init__' has 77 lines (max 40).
- database.py: function 'with_options' has 46 lines (max 40).
- database.py: function 'get_collection' has 54 lines (max 40).
- database.py: function 'watch' has 131 lines (max 40).
- database.py: function 'create_collection' has 159 lines (max 40).
- database.py: function 'aggregate' has 83 lines (max 40).
- database.py: function 'command' has 113 lines (max 40).
- database.py: function 'cursor_command' has 71 lines (max 40).
- database.py: function 'drop_collection' has 77 lines (max 40).
- database.py: function 'validate_collection' has 84 lines (max 40).
- database.py: function 'dereference' has 41 lines (max 40).
- encryption.py: function 'kms_request' has 86 lines (max 40).
- encryption.py: function '__init__' has 135 lines (max 40).
- encryption.py: function 'create_encrypted_collection' has 89 lines (max 40).
- encryption.py: function 'create_data_key' has 91 lines (max 40).
- encryption.py: function '_encrypt_helper' has 51 lines (max 40).
- encryption.py: function 'encrypt' has 62 lines (max 40).
- encryption.py: function 'encrypt_expression' has 55 lines (max 40).
- encryption.py: function 'rewrap_many_data_key' has 58 lines (max 40).
- mongo_client.py: function '__init__' has 728 lines (max 40).
- mongo_client.py: function '_resolve_srv' has 69 lines (max 40).
- mongo_client.py: function 'watch' has 131 lines (max 40).
- mongo_client.py: function 'get_default_database' has 60 lines (max 40).
- mongo_client.py: function 'get_database' has 59 lines (max 40).
- mongo_client.py: function '_select_server' has 47 lines (max 40).
- mongo_client.py: function '_retry_internal' has 44 lines (max 40).
- mongo_client.py: function '_retryable_read' has 50 lines (max 40).
- mongo_client.py: function '_process_kill_cursors' has 41 lines (max 40).
- mongo_client.py: function 'drop_database' has 50 lines (max 40).
- mongo_client.py: function 'bulk_write' has 133 lines (max 40).
- mongo_client.py: function 'run' has 145 lines (max 40).
- monitor.py: function '_run' has 42 lines (max 40).
- monitor.py: function '_check_once' has 61 lines (max 40).
- network.py: function 'command' has 238 lines (max 40).
- pool.py: function '__init__' has 59 lines (max 40).
- pool.py: function '_hello' has 86 lines (max 40).
- pool.py: function 'command' has 89 lines (max 40).
- pool.py: function '__init__' has 86 lines (max 40).
- pool.py: function '_reset' has 93 lines (max 40).
- pool.py: function 'remove_stale_sockets' has 69 lines (max 40).
- pool.py: function 'connect' has 87 lines (max 40).
- pool.py: function 'checkout' has 78 lines (max 40).
- pool.py: function '_get_conn' has 129 lines (max 40).
- pool.py: function 'checkin' has 75 lines (max 40).
- server.py: function 'run_operation' has 212 lines (max 40).
- settings.py: function '__init__' has 54 lines (max 40).
- topology.py: function '__init__' has 87 lines (max 40).
- topology.py: function 'select_servers' has 47 lines (max 40).
- topology.py: function '_select_servers_loop' has 82 lines (max 40).
- topology.py: function '_process_change' has 71 lines (max 40).
- topology.py: function 'close' has 68 lines (max 40).
- topology.py: function '_handle_error' has 70 lines (max 40).
- topology.py: function '_update_servers' has 44 lines (max 40).
- topology.py: function '_error_message' has 58 lines (max 40).
- uri_parser.py: function 'parse_uri' has 83 lines (max 40).
- uri_parser.py: function '_parse_srv' has 70 lines (max 40).
- multipart.py: function '_get_disk_file' has 60 lines (max 40).
- multipart.py: function '_internal_write' has 128 lines (max 40).
- multipart.py: function 'on_headers_finished' has 50 lines (max 40).
- multipart.py: function 'parse_form' has 53 lines (max 40).
- authentication.py: function 'decorator' has 50 lines (max 40).
- responses.py: function 'set_cookie' has 45 lines (max 40).
- routing.py: function 'compile_path' has 56 lines (max 40).
- routing.py: function '__init__' has 41 lines (max 40).
- schemas.py: function 'get_endpoints' has 49 lines (max 40).
- testclient.py: function 'handle_request' has 151 lines (max 40).
- testclient.py: function 'request' has 41 lines (max 40).
- _exception_handler.py: function 'wrap_app_handling_exceptions' has 43 lines (max 40).
- cors.py: function '__init__' has 62 lines (max 40).
- cors.py: function 'preflight_response' has 45 lines (max 40).
- wsgi.py: function 'build_environ' has 52 lines (max 40).
- introspection.py: function 'get_literal_values' has 112 lines (max 40).
- introspection.py: function 'inspect_annotation' has 124 lines (max 40).
- introspection.py: function '_unpack_annotated_inner' has 67 lines (max 40).
- typing_objects.py: function '_compile_identity_check_function' has 45 lines (max 40).
- config.py: function '__init__' has 172 lines (max 40).
- config.py: function 'configure_logging' has 44 lines (max 40).
- config.py: function 'bind_socket' has 48 lines (max 40).
- main.py: function 'main' has 106 lines (max 40).
- main.py: function 'run' has 136 lines (max 40).
- workers.py: function '__init__' has 42 lines (max 40).
- wsgi.py: function 'build_environ' has 55 lines (max 40).
- h11_impl.py: function '__init__' has 49 lines (max 40).
- h11_impl.py: function 'handle_events' has 107 lines (max 40).
- httptools_impl.py: function '__init__' has 54 lines (max 40).
- httptools_impl.py: function 'on_headers_complete' has 51 lines (max 40).
- websockets_impl.py: function '__init__' has 57 lines (max 40).
- websockets_sansio_impl.py: function '__init__' has 66 lines (max 40).
- wsproto_impl.py: function '__init__' has 56 lines (max 40).
- secrets_manager.py: function 'get_or_create_secrets' has 41 lines (max 40).


---

## Documentation Coverage

* **Total Functions**: 4276
* **Documented**: 1234
* **Documentation Rate**: 28.9%

### Undocumented Elements

| File | Function Signature | Status |
| :--- | :--- | :--- |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _should_collect_from_parameters(t)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _should_collect_from_parameters(t)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __instancecheck__(self, obj)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, getitem)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getattr__(self, item)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __mro_entries__(self, bases)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __or__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __ror__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __instancecheck__(self, obj)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __subclasscheck__(self, cls)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getitem__(self, parameters)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def IntVar(name)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _value_and_type_iter(params)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, doc: str)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getitem__(self, parameters)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def utf8(value)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _is_dunder(attr)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __setattr__(self, attr, val)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getitem__(self, params)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _get_protocol_attrs(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _caller(depth=1, default='__main__')` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _no_init(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(mcls, name, bases, namespace, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(cls, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __subclasscheck__(cls, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __instancecheck__(cls, instance)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __eq__(cls, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _proto_hook(cls, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init_subclass__(cls, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __setattr__(cls, attr, value)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _get_typeddict_qualifiers(annotation_type)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __annotate__(format)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __subclasscheck__(cls, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _create_typeddict(typename,         fields,         /,         *,         typing_is_inline,         total,         closed,         extra_items,         **kwargs,)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self,             typename,             fields=_marker,             /,             *,             total=True,             closed=None,             extra_items=NoExtraItems,             **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __mro_entries__(self, bases)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _clean_optional(obj, hints, globalns=None, localns=None)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _set_default(type_param, default)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _set_module(typevarlike)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls, name, *constraints, bound=None,                     covariant=False, contravariant=False,                     default=NoDefault, infer_variance=False)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _tvar_prepare_subst(alias, args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __copy__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __deepcopy__(self, memo)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, origin)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, origin)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls, name, *, bound=None,                     covariant=False, contravariant=False,                     infer_variance=False, default=NoDefault)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _paramspec_prepare_subst(alias, args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def args(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def kwargs(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, name, *, bound=None, covariant=False, contravariant=False,                      infer_variance=False, default=NoDefault)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, origin, args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __parameters__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def copy_with(self, params)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getitem__(self, args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def copy_with(self, params)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getitem__(self, args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _create_concatenate_alias(origin, parameters)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _concatenate_getitem(self, parameters)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def is_str(val: Union[str, float])` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self, obj, /)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def foo(**kwargs: Unpack[Movie])` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _is_unpack(obj)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, getitem)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __typing_unpacked_tuple_args__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __typing_is_unpacked_typevartuple__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getitem__(self, args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def Unpack(self, parameters)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _is_unpack(obj)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _unpack_args(*args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls, name, *, default=NoDefault)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _typevartuple_prepare_subst(alias, args)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init_subclass__(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, shape: Tuple[*Ts])` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, name, *, default=NoDefault)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init_subclass__(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def decorator(cls_or_fn)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls, /, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init_subclass__(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init_subclass__(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def wrapper(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _is_param_expr(arg)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _is_param_expr(arg)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __new__(cls, typename, bases, ns)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _namedtuple_mro_entries(bases)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self, obj, /)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self, name, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __mro_entries__(self, bases)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init_subclass__(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __or__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __ror__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getattr__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _check_single_param(self, param, recursion=0)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _check_parameters(self, parameters)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getitem__(self, parameters)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init_subclass__(cls, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __or__(self, right)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __ror__(self, left)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def _eval_with_owner(forward_ref, *, owner=None, globals=None, locals=None, type_params=None)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __init__(self,         name: str,         repr: typing.Optional[str] = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __call__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __or__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __ror__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\typing_extensions.py | `def __getstate__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\_virtualenv.py | `def parse_config_files(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\_virtualenv.py | `def find_spec(self, fullname, path, target=None)` | Undocumented |
| backend\.venv\Lib\site-packages\_virtualenv.py | `def exec_module(old, module)` | Undocumented |
| backend\.venv\Lib\site-packages\_virtualenv.py | `def load_module(old, name)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\from_thread.py | `def __init__(self, async_cm: AbstractAsyncContextManager[T_co], portal: BlockingPortal)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\from_thread.py | `def __init__(self, future: Future)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\functools.py | `def __init__(self, wrapper: AsyncLRUCacheWrapper[..., T], instance: object)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\functools.py | `def __init__(self,         func: Callable[P, Awaitable[T]],         maxsize: int | None,         typed: bool,         always_checkpoint: bool,         ttl: int | None,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\functools.py | `def __init__(self, maxsize: int | None, typed: bool, always_checkpoint: bool, ttl: int | None)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\lowlevel.py | `def __init__(self, var: RunVar[T], value: T | Literal[_NoValueSet.NO_VALUE_SET])` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\lowlevel.py | `def __init__(self, name: str, default: T | Literal[_NoValueSet.NO_VALUE_SET] = NO_VALUE_SET)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\streams\file.py | `def __init__(self, file: IO[bytes])` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self,             *,             debug: bool | None = None,             loop_factory: Callable[[], AbstractEventLoop] | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, deadline: float = math.inf, shield: bool = False)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, parent_id: int | None, cancel_scope: CancelScope | None)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, future: asyncio.Future, parent_id: int)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self,         root_task: asyncio.Task,         workers: set[WorkerThread],         idle_workers: deque[WorkerThread],)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, transport: asyncio.Transport, protocol: StreamProtocol)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, raw_socket: socket.socket)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, raw_socket: socket.socket)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, raw_socket: socket.socket)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, transport: asyncio.DatagramTransport, protocol: DatagramProtocol)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, transport: asyncio.DatagramTransport, protocol: DatagramProtocol)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self,         initial_value: int,         *,         max_value: int | None = None,         fast_acquire: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, total_tokens: float)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, signals: tuple[Signals, ...])` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_asyncio.py | `def __init__(self, task: asyncio.Task)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_trio.py | `def __init__(self, raw_socket: socket.socket)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_trio.py | `def __init__(self, raw_socket: socket.socket)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_trio.py | `def __init__(self, signals: tuple[Signals, ...])` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_backends\_trio.py | `def __init__(self, task: trio.lowlevel.Task)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_exceptions.py | `def __init__(self, excinfo: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_exceptions.py | `def __init__(self, action: str)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_synchronization.py | `def __init__(self, *, fast_acquire: bool = False)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_synchronization.py | `def __init__(self, lock: Lock | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_synchronization.py | `def __init__(self,         initial_value: int,         *,         max_value: int | None = None,         fast_acquire: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_synchronization.py | `def __init__(self, action: str = "using")` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_tempfile.py | `def __init__(self: TemporaryFile[bytes],         mode: OpenBinaryMode = ...,         buffering: int = ...,         encoding: str | None = ...,         newline: str | None = ...,         suffix: str | None = ...,         prefix: str | None = ...,         dir: str | None = ...,         *,         errors: str | None = ...,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_tempfile.py | `def __init__(self: TemporaryFile[str],         mode: OpenTextMode,         buffering: int = ...,         encoding: str | None = ...,         newline: str | None = ...,         suffix: str | None = ...,         prefix: str | None = ...,         dir: str | None = ...,         *,         errors: str | None = ...,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_tempfile.py | `def __init__(self: NamedTemporaryFile[bytes],         mode: OpenBinaryMode = ...,         buffering: int = ...,         encoding: str | None = ...,         newline: str | None = ...,         suffix: str | None = ...,         prefix: str | None = ...,         dir: str | None = ...,         delete: bool = ...,         *,         errors: str | None = ...,         delete_on_close: bool = ...,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_tempfile.py | `def __init__(self: NamedTemporaryFile[str],         mode: OpenTextMode,         buffering: int = ...,         encoding: str | None = ...,         newline: str | None = ...,         suffix: str | None = ...,         prefix: str | None = ...,         dir: str | None = ...,         delete: bool = ...,         *,         errors: str | None = ...,         delete_on_close: bool = ...,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_tempfile.py | `def __init__(self: SpooledTemporaryFile[bytes],         max_size: int = ...,         mode: OpenBinaryMode = ...,         buffering: int = ...,         encoding: str | None = ...,         newline: str | None = ...,         suffix: str | None = ...,         prefix: str | None = ...,         dir: str | None = ...,         *,         errors: str | None = ...,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_tempfile.py | `def __init__(self: SpooledTemporaryFile[str],         max_size: int = ...,         mode: OpenTextMode = ...,         buffering: int = ...,         encoding: str | None = ...,         newline: str | None = ...,         suffix: str | None = ...,         prefix: str | None = ...,         dir: str | None = ...,         *,         errors: str | None = ...,)` | Undocumented |
| backend\.venv\Lib\site-packages\anyio\_core\_testing.py | `def __init__(self,         id: int,         parent_id: int | None,         name: str | None,         coro: Generator[Any, Any, Any] | Awaitable[Any],)` | Undocumented |
| backend\.venv\Lib\site-packages\bson\codec_options.py | `def __getattr__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\bson\codec_options.py | `def __setattr__(self, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def embedding_api(self, csource, packed=False, pack=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _cdef(self, csource, override=False, **options)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _typeof_locked(self, cdecl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _typeof(self, cdecl, consider_function_as_funcptr=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def allocate(cdecl, init=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def buffer(self, cdata, size=-1)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def callback_decorator_wrap(python_callable)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _get_cached_btype(self, type)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _get_errno(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _set_errno(self, errno)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def getwinerror(self, code=-1)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _pointer_to(self, ctype)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _typeoffsetof(self, ctype, field_or_index, *fields_or_indexes)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def new_handle(self, x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def from_handle(self, x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def release(self, x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _apply_windows_unicode(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _apply_embedding_fix(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def ensure(key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def set_source(self, module_name, source, source_extension='.c', **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def set_source_pkgconfig(self, module_name, pkgconfig_libs, source,                              source_extension='.c', **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def distutils_extension(self, tmpdir='build', verbose=True)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def emit_c_code(self, filename)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def emit_python_code(self, filename)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def init_once(self, func, tag)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def embedding_init_code(self, pysource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def def_extern(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _load_backend_lib(backend, name, flags)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _make_ffi_library(ffi, libname, flags)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def accessor_function(name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def accessor_variable(name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def addressof_var(name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def accessor_constant(name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def accessor_int_constant(name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def update_accessors()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def accessor_enum(name, tp=tp, i=i)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def make_accessor(name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def __getattr__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def __setattr__(self, name, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def __dir__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def __addressof__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def __cffi_close__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\api.py | `def _builtin_function_type(func)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __init__(self, *args)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _newp(cls, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_ctypes(value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _arg_to_ctypes(cls, *value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _create_ctype_obj(cls, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _from_ctypes(ctypes_value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_c_name(cls, replace_with='')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _fix_class(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _addr_repr(self, address)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __repr__(self, c_name=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _convert_to_address(self, BClass)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_size(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_size_of_instance(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_from(cls, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_to_integer(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _alignment(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _make_cmp(name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def cmp(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_string(self, maxlen)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _newp(cls, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _newp(cls, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_from(cls, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _new_pointer_at(cls, address)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_to_integer(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __nonzero__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_ctypes(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _from_ctypes(cls, ctypes_ptr)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _initialize(cls, ctypes_ptr, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _convert_to_address(self, BClass)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _create_ctype_obj(cls, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _offsetof(cls, fieldname)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _convert_to_address(self, BClass)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _from_ctypes(cls, ctypes_struct_or_union)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_ctypes(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __repr__(self, c_name=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def set_ffi(self, ffi)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_types(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def load_library(self, path, flags=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_void_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _from_ctypes(novalue)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_ctypes(novalue)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_primitive_type(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_source_to_int(source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __init__(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _create_ctype_obj(init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_from(cls, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __int__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_from(cls, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __int__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_from(cls, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __int__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_from(cls, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __int__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __float__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_ctypes(x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_ctypes(x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __nonzero__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __nonzero__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_ctypes(x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _from_ctypes(value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _initialize(blob, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_string(self, maxlen)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_string(self, maxlen)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_pointer_type(self, BItem)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __init__(self, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __add__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __sub__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __getitem__(self, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __setitem__(self, index, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _arg_to_ctypes(cls, *value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_string(self, maxlen)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_array_type(self, CTypesPtr, length)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __init__(self, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _initialize(blob, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __getitem__(self, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __setitem__(self, index, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_string(self, maxlen)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _convert_to_address(self, BClass)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _from_ctypes(ctypes_array)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _arg_to_ctypes(value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __add__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _cast_from(cls, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _new_struct_or_union(self, kind, name, base_ctypes_class)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_struct_type(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_union_type(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def complete_struct_or_union(self, CTypesStructOrUnion, fields, tp,                                  totalsize=-1, totalalignment=-1, sflags=0,                                  pack=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _create_ctype_obj(init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def initialize(blob, init)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def setter(self, value, fname=fname, BField=BField)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def getter(self, fname=fname, BField=BField)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def setter(self, value, fname=fname, BField=BField)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def getter(self, fname=fname)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def setter(self, value, fname=fname)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_function_type(self, BArgs, BResult, has_varargs)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __init__(self, init, error=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def callback(*args)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _initialize(ctypes_ptr, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __call__(self, *args)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def new_enum_type(self, name, enumerators, enumvalues, CTypesInt)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _get_own_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def _to_string(self, maxlen)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def get_errno(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def set_errno(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def buffer(self, bptr, size=-1)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def sizeof(self, cdata_or_BType)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def alignof(self, BType)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def newp(self, BType, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def cast(self, BType, source)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def callback(self, BType, source, error, onerror)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def gcp(self, cdata, destructor, size=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def remove(k)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def getcname(self, BType, replace_with)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def typeoffsetof(self, BType, fieldname, num=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def rawaddressof(self, BTypePtr, cdata, offset=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def __init__(self, backend, cdll)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def load_function(self, BType, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def read_variable(self, BType, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\backend_ctypes.py | `def write_variable(self, BType, name, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cffi_opcode.py | `def __init__(self, op, arg)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cffi_opcode.py | `def as_c_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cffi_opcode.py | `def as_python_bytes(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cffi_opcode.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cffi_opcode.py | `def format_four_bytes(num)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\commontypes.py | `def resolve_common_type(parser, commontype)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\commontypes.py | `def win_common_types()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _workaround_for_static_import_finders()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _get_parser()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _workaround_for_old_pycparser(csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _preprocess_extern_python(csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _warn_for_string_literal(csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _warn_for_non_extern_non_static_global_variable(decl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _remove_line_directives(csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def replace(m)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _put_back_line_directives(csource, line_directives)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def replace(m)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _preprocess(csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def replace_keeping_newlines(m)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _common_type_names(csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _parse(self, csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _convert_pycparser_error(self, e, csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def convert_pycparser_error(self, e, csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def parse(self, csource, override=False, packed=False, pack=None,                     dllexport=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _internal_parse(self, csource)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _add_constants(self, key, val)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _add_integer_constant(self, name, int_str)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _process_macros(self, macros)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _declare_function(self, tp, quals, decl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _parse_decl(self, decl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def parse_type(self, cdecl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def parse_type_and_quals(self, cdecl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _declare(self, name, obj, included=False, quals=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _extract_quals(self, type)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _get_type_pointer(self, type, quals, declname=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _get_type_and_quals(self, typenode, name=None, partial_length_ok=False,                             typedef_example=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _parse_function_type(self, typenode, funcname=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _as_func_arg(self, type, quals)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _get_struct_union_enum_type(self, kind, type, name=None, nested=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _make_partial(self, tp, nested)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _parse_constant(self, exprnode, partial_length_ok=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _c_div(self, a, b)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _build_enum_type(self, explicit_name, decls)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def include(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _get_unknown_type(self, decl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\cparser.py | `def _get_unknown_ptr_type(self, decl)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\error.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\ffiplatform.py | `def _build(tmpdir, ext, compiler_verbose=0, debug=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\ffiplatform.py | `def samefile(f1, f2)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\ffiplatform.py | `def maybe_relative_path(path)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\ffiplatform.py | `def _flatten(x, f)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\ffiplatform.py | `def flatten(x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\lock.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\lock.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\lock.py | `def __exit__(self, *args)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\lock.py | `def acquire(self, f)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def qualify(quals, replace_with)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def get_c_name(self, replace_with='', context='a C file', quals=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def _get_c_name(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def has_c_name(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def is_integer_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def get_cached_btype(self, ffi, finishlist, can_delay=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def _get_items(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def is_complex_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def is_char_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def is_integer_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def is_float_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def is_complex_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def is_integer_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, args, result, ellipsis, abi=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def as_function_pointer(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def as_raw_function(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, totype, quals=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def ConstPointerType(totype)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, totype, name, quals=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, item, length)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def length_is_unknown(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def resolve_length(self, newlength)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_c_name_with_marker(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def force_the_name(self, forcename)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def get_official_name(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, name, fldnames, fldtypes, fldbitsize, fldquals=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def anonymous_struct_fields(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def enumfields(self, expand_anonymous_struct_union=True)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def force_flatten(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def get_cached_btype(self, ffi, finishlist, can_delay=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def finish_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def _verification_error(self, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def check_not_partial(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def __init__(self, name, enumerators, enumvalues, baseinttype=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def force_the_name(self, forcename)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def check_not_partial(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_backend_type(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def build_baseinttype(self, ffi, finishlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def unknown_type(name, structname=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def unknown_ptr_type(name, structname=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def get_typecache(backend)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def global_cache(srctype, ffi, funcname, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def pointer_cache(ffi, BType)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\model.py | `def attach_exception_info(e, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def flags_from_pkgconfig(libs)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def get_include_dirs(string)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def get_library_dirs(string)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def get_libraries(string)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def get_macros(string)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def _macro(x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def get_other_cflags(string)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def get_other_libs(string)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\pkgconfig.py | `def kwargs(libname)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def __init__(self, name, address, type_op, size=0, check_value=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_c_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_python_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def __init__(self, name, field_offset, field_size, fbitsize, field_type_op)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_c_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_python_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_field_python_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def __init__(self, name, type_index, flags, size, alignment, comment,                  first_field_index, c_fields)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_c_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_python_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def __init__(self, name, type_index, size, signed, allenums)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_c_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_python_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def __init__(self, name, type_index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_c_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def as_python_expr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def __init__(self, ffi, module_name, target_is_python=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def needs_version(self, ver)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def collect_type_table(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _enum_fields(self, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _do_collect_type(self, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate(self, step_name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def collect_step_tables(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _prnt(self, what='')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def write_source_to_f(self, f, preamble)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _rel_readlines(self, filename)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def write_c_source_to_f(self, f, preamble)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _to_py(self, x)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def write_py_source_to_f(self, f)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _gettypenum(self, type)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _convert_funcarg_to_c(self, tp, fromvar, tovar, errcode)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _extra_local_variables(self, tp, localvars, freelines)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _convert_funcarg_to_c_ptr_or_array(self, tp, fromvar, tovar, errcode)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _convert_expr_from_c(self, tp, var, context)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _typedef_type(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_typedef_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_typedef_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _typedef_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_typedef_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_function_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_function_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def need_indirection(type)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_function_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _field_type(self, tp_struct, field_name, tp_field)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _struct_collecttype(self, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _struct_decl(self, tp, cname, approxname)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _struct_ctx(self, tp, cname, approxname, named_ptr=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _check_not_opaque(self, tp, location)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _add_missing_struct_unions(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_struct_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _struct_names(self, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_struct_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_struct_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_anonymous_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_anonymous_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_anonymous_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_const(self, is_int, name, tp=None, category='const',                             check_value=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_constant_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_constant_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_constant_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_enum_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_enum_decl(self, tp, name=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _enum_ctx(self, tp, cname)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_enum_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_macro_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_macro_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_macro_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _global_type(self, tp, global_name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_variable_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_variable_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_variable_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_extern_python_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _extern_python_decl(self, tp, name, tag_and_space)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def may_need_128_bits(tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_extern_python_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_dllexport_python_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_extern_python_plus_c_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _generate_cpy_extern_python_ctx(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _print_string_literal_in_array(self, s)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_VoidType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_PrimitiveType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_UnknownIntegerType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_UnknownFloatType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_RawFunctionType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_PointerType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_FunctionPtrType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_ArrayType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_StructType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _emit_bytecode_EnumType(self, tp, index)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def write(self, s)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _is_file_like(maybefile)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _make_c_or_py_source(ffi, module_name, preamble, target_file, verbose)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def make_c_source(ffi, module_name, preamble, target_c_file, verbose=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def make_py_source(ffi, module_name, target_py_file, verbose=False)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _modname_to_file(outputdir, modname, extension)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _patch_meth(patchlist, cls, name, new_meth)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _unpatch_meths(patchlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _patch_for_embedding(patchlist)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def my_link_shared_object(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def _patch_for_target(patchlist, target)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\recompiler.py | `def recompile(ffi, module_name, preamble, tmpdir='.', call_c_compiler=True,               c_file=None, source_extension='.c', extradir=None,               compiler_verbose=1, target=None, debug=None,               uses_ffiplatform=True, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def error(msg)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def execfile(filename, glob)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def add_cffi_module(dist, mod_spec)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def _add_c_module(dist, ffi, module_name, source, source_extension, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def make_mod(tmpdir, pre_run=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def _add_py_module(dist, ffi, module_name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def generate_mod(py_file)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def get_source_files(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\setuptools_ext.py | `def cffi_modules(dist, attr, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def __init__(self, verifier)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def patch_extension_kwds(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def find_module(self, module_name, path, so_suffixes)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def collect_types(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _prnt(self, what='')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _gettypenum(self, type)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _do_collect_type(self, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def write_source_to_f(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def load_library(self, flags=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def __dir__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _get_declarations(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate(self, step_name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _load(self, module, step_name, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_nothing(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_noop(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _convert_funcarg_to_c(self, tp, fromvar, tovar, errcode)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _extra_local_variables(self, tp, localvars, freelines)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _convert_funcarg_to_c_ptr_or_array(self, tp, fromvar, tovar, errcode)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _convert_expr_from_c(self, tp, var, context)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_function_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_function_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_function_method(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_cpy_function(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_struct_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_struct_method(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loading_cpy_struct(self, tp, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_cpy_struct(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_union_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_union_method(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loading_cpy_union(self, tp, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_cpy_union(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_struct_or_union_decl(self, tp, prefix, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_struct_or_union_method(self, tp, prefix, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loading_struct_or_union(self, tp, prefix, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_struct_or_union(self, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def check(realvalue, expectedvalue, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_anonymous_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_anonymous_method(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loading_cpy_anonymous(self, tp, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_cpy_anonymous(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_const(self, is_int, name, tp=None, category='const',                             vartp=None, delayed=True, size_too=False,                             check_value=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_constant_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_constant_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _check_int_constant_value(self, name, value, err_prefix='')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _enum_funcname(self, prefix, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_enum_decl(self, tp, name, prefix='enum')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loading_cpy_enum(self, tp, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_cpy_enum(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_macro_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_variable_collecttype(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_cpy_variable_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _loaded_cpy_variable(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def getter(library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def setter(library, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_cpy.py | `def _generate_setup_custom(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def __init__(self, verifier)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def patch_extension_kwds(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def find_module(self, module_name, path, so_suffixes)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def collect_types(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _prnt(self, what='')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def write_source_to_f(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def load_library(self, flags=0)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def __dir__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _get_declarations(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate(self, step_name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _load(self, module, step_name, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_nothing(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_noop(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_function_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_function(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _make_struct_wrapper(self, oldfunc, i, tp, base_tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def newfunc(*args)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def newfunc(*args)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_struct_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loading_gen_struct(self, tp, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_struct(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_union_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loading_gen_union(self, tp, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_union(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_struct_or_union_decl(self, tp, prefix, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loading_struct_or_union(self, tp, prefix, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_struct_or_union(self, tp)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def check(realvalue, expectedvalue, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_anonymous_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loading_gen_anonymous(self, tp, name, module)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_anonymous(self, tp, name, module, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_const(self, is_int, name, tp=None, category='const',                             check_value=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_constant_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _load_constant(self, is_int, tp, name, module, check_value=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_constant(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _check_int_constant_value(self, name, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _load_known_int_constant(self, module, funcname)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _enum_funcname(self, prefix, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_enum_decl(self, tp, name, prefix='enum')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loading_gen_enum(self, tp, name, module, prefix='enum')` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_enum(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_macro_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_macro(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _generate_gen_variable_decl(self, tp, name)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def _loaded_gen_variable(self, tp, name, module, library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def getter(library)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\vengine_gen.py | `def setter(library, value)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _extension_suffixes()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _extension_suffixes()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def write(self, s)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def __init__(self, ffi, preamble, tmpdir=None, modulename=None,                  ext_package=None, tag='', force_generic_engine=False,                  source_extension='.c', flags=None, relative_to=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def get_module_name(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def get_extension(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def generates_python_module(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def make_relative_to(self, kwds, relative_to)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _locate_module(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _write_source_to(self, file)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _write_source(self, file=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _compile_module(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _load_library(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _locate_engine_class(ffi, force_generic_engine)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _caller_dir_pycache()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _get_so_suffixes()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\verifier.py | `def _ensure_dir(filename)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\_imp_emulation.py | `def get_suffixes()` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\_imp_emulation.py | `def find_module(name, path=None)` | Undocumented |
| backend\.venv\Lib\site-packages\cffi\_imp_emulation.py | `def load_dynamic(name, path, file=None)` | Undocumented |
| backend\.venv\Lib\site-packages\click\core.py | `def set_language(value)` | Undocumented |
| backend\.venv\Lib\site-packages\click\core.py | `def get_language()` | Undocumented |
| backend\.venv\Lib\site-packages\click\core.py | `def cli(ctx)` | Undocumented |
| backend\.venv\Lib\site-packages\click\core.py | `def cli(input)` | Undocumented |
| backend\.venv\Lib\site-packages\click\core.py | `def process_result(result, input)` | Undocumented |
| backend\.venv\Lib\site-packages\click\decorators.py | `def decorator(f)` | Undocumented |
| backend\.venv\Lib\site-packages\click\decorators.py | `def new_func(ctx, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\click\parser.py | `def __init__(self,         obj: CoreOption,         opts: cabc.Sequence[str],         dest: str | None,         action: str | None = None,         nargs: int = 1,         const: t.Any | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\click\parser.py | `def __init__(self, obj: CoreArgument, dest: str | None, nargs: int = 1)` | Undocumented |
| backend\.venv\Lib\site-packages\click\testing.py | `def __init__(self,         runner: CliRunner,         stdout_bytes: bytes,         stderr_bytes: bytes,         output_bytes: bytes,         return_value: t.Any,         exit_code: int,         exception: BaseException | None,         exc_info: tuple[type[BaseException], BaseException, TracebackType]         | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\click\types.py | `def __init__(self, formats: cabc.Sequence[str] | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\click\types.py | `def __init__(self,         exists: bool = False,         file_okay: bool = True,         dir_okay: bool = True,         writable: bool = False,         readable: bool = True,         resolve_path: bool = False,         allow_dash: bool = False,         path_type: type[t.Any] | None = None,         executable: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\click\_compat.py | `def __init__(self,         stream: t.BinaryIO,         force_readable: bool = False,         force_writable: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\click\_termui_impl.py | `def __init__(self, stream: t.IO[bytes], *, color: bool, **kwargs: t.Any)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def code_to_chars(code)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def set_title(title)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def clear_screen(mode=2)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def clear_line(mode=2)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def UP(self, n=1)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def DOWN(self, n=1)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def FORWARD(self, n=1)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansi.py | `def BACK(self, n=1)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def __init__(self, wrapped, converter)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def __getattr__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def __enter__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def __exit__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def __setstate__(self, state)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def __getstate__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def write(self, text)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def isatty(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def closed(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def __init__(self, wrapped, convert=None, strip=None, autoreset=False)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def get_win32_calls(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def write(self, text)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def reset_all(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def write_plain_text(self, text, start, end)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def convert_ansi(self, paramstring, command)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def extract_params(self, command, paramstring)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def call_win32(self, command, params)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def convert_osc(self, text)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\ansitowin32.py | `def flush(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\initialise.py | `def _wipe_internal_state_for_tests()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\initialise.py | `def reset_all()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\initialise.py | `def deinit()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\initialise.py | `def just_fix_windows_console()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\initialise.py | `def colorama_text(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\initialise.py | `def reinit()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\initialise.py | `def wrap_stream(stream, convert, strip, autoreset, wrap)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def _winapi_test(handle)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def winapi_test()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def GetConsoleScreenBufferInfo(stream_id=STDOUT)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def SetConsoleTextAttribute(stream_id, attrs)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def SetConsoleCursorPosition(stream_id, position, adjust=True)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def FillConsoleOutputCharacter(stream_id, char, length, start)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def SetConsoleTitle(title)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def GetConsoleMode(handle)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\win32.py | `def SetConsoleMode(handle, mode)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def get_osfhandle(_)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def get_attrs(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def set_attrs(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def reset_all(self, on_stderr=None)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def set_console(self, attrs=None, on_stderr=False)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def get_position(self, handle)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def set_cursor_position(self, position=None, on_stderr=False)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def cursor_adjust(self, x, y, on_stderr=False)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def erase_screen(self, mode=0, on_stderr=False)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def erase_line(self, mode=0, on_stderr=False)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def set_title(self, title)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\winterm.py | `def enable_vt_processing(fd)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testIsAProxy(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testDelegatesWrite(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testDelegatesContext(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testProxyNoContextManager(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def test_closed_shouldnt_raise_on_closed_stream(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def test_closed_shouldnt_raise_on_detached_stream(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testInit(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testStripIsTrueOnWindows(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testStripIsFalseOffWindows(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testWriteStripsAnsi(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testWriteDoesNotStripAnsi(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def assert_autoresets(self, convert, autoreset=True)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testWriteAutoresets(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testWriteAndConvertWritesPlainText(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testWriteAndConvertStripsAllValidAnsi(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testWriteAndConvertSkipsEmptySnippets(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testWriteAndConvertCallsWin32WithParamsAndCommand(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def test_reset_all_shouldnt_raise_on_closed_orig_stdout(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def test_wrap_shouldnt_raise_on_closed_orig_stdout(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def test_wrap_shouldnt_raise_on_missing_closed_attr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testExtractParams(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def testCallWin32UsesLookup(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def test_osc_codes(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansitowin32_test.py | `def test_native_windows_ansi(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansi_test.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansi_test.py | `def tearDown(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansi_test.py | `def testForeAttributes(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansi_test.py | `def testBackAttributes(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\ansi_test.py | `def testStyleAttributes(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def tearDown(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def assertWrapped(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def assertNotWrapped(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testInitWrapsOnWindows(self, _)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testInitDoesntWrapOnEmulatedWindows(self, _)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testInitDoesntWrapOnNonWindows(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testInitDoesntWrapIfNone(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testInitAutoresetOnWrapsOnAllPlatforms(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testInitWrapOffDoesntWrapOnWindows(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testInitWrapOffIncompatibleWithAutoresetOn(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testAutoResetPassedOn(self, mockATW32, _)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testAutoResetChangeable(self, mockATW32)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testAtexitRegisteredOnlyOnce(self, mockRegister)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def _reset(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def tearDown(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def testJustFixWindowsConsole(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\initialise_test.py | `def fake_std()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def is_a_tty(stream)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def test_TTY(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def test_nonTTY(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def test_withPycharm(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def test_withPycharmTTYOverride(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def test_withPycharmNonTTYOverride(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def test_withPycharmNoneOverride(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\isatty_test.py | `def test_withPycharmStreamWrapped(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\utils.py | `def isatty(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\utils.py | `def isatty(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\utils.py | `def osname(name)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\utils.py | `def replace_by(stream)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\utils.py | `def replace_original_by(stream)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\utils.py | `def pycharm()` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testInit(self, mockWin32)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testGetAttrs(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testResetAll(self, mockWin32)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testFore(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testBack(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testStyle(self)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testSetConsole(self, mockWin32)` | Undocumented |
| backend\.venv\Lib\site-packages\colorama\tests\winterm_test.py | `def testSetConsoleOnStderr(self, mockWin32)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\fernet.py | `def __init__(self, fernets: Iterable[Fernet])` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\utils.py | `def __init__(self, value: object, message: str, warning_class)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\utils.py | `def __init__(self, module: types.ModuleType)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\utils.py | `def inner(instance: object)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\modes.py | `def __init__(self, initialization_vector: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\modes.py | `def __init__(self, initialization_vector: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\decrepit\ciphers\modes.py | `def __init__(self, initialization_vector: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\hashes.py | `def __init__(self, digest_size: int)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\hashes.py | `def __init__(self, digest_size: int)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\hashes.py | `def __init__(self, digest_size: int)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\hashes.py | `def __init__(self, digest_size: int)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\padding.py | `def __init__(self, block_size: int)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\padding.py | `def __init__(self, block_size: int)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\_serialization.py | `def __init__(self, password: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\_serialization.py | `def __init__(self,         format: PrivateFormat,         password: bytes,         *,         kdf_rounds: int | None,         hmac_hash: HashAlgorithm | None,         key_cert_algorithm: PBES | None,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\asymmetric\ec.py | `def __init__(self,         algorithm: asym_utils.Prehashed | hashes.HashAlgorithm,         deterministic_signing: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\asymmetric\padding.py | `def __init__(self,         mgf: MGF,         algorithm: hashes.HashAlgorithm,         label: bytes | None,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\asymmetric\padding.py | `def __init__(self, algorithm: hashes.HashAlgorithm)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\asymmetric\utils.py | `def __init__(self, algorithm: hashes.HashAlgorithm)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\algorithms.py | `def __init__(self, key: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\algorithms.py | `def __init__(self, key: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\algorithms.py | `def __init__(self, key: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\algorithms.py | `def __init__(self, key: utils.Buffer, nonce: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\algorithms.py | `def __init__(self, key: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\base.py | `def encryptor(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\base.py | `def decryptor(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\modes.py | `def __init__(self, initialization_vector: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\modes.py | `def __init__(self, tweak: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\modes.py | `def __init__(self, nonce: utils.Buffer)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\ciphers\modes.py | `def __init__(self,         initialization_vector: utils.Buffer,         tag: bytes | None = None,         min_tag_length: int = 16,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\serialization\pkcs12.py | `def __init__(self,         key: PrivateKeyTypes | None,         cert: PKCS12Certificate | None,         additional_certs: list[PKCS12Certificate],)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\serialization\pkcs7.py | `def __init__(self,         data: utils.Buffer | None = None,         signers: list[             tuple[                 x509.Certificate,                 PKCS7PrivateKeyTypes,                 PKCS7HashTypes,                 padding.PSS | padding.PKCS1v15 | None,             ]         ] = [],         additional_certs: list[x509.Certificate] = [],)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\serialization\pkcs7.py | `def __init__(self,         *,         _data: bytes | None = None,         _recipients: list[x509.Certificate] | None = None,         _content_encryption_algorithm: ContentEncryptionAlgorithm         | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\serialization\ssh.py | `def __init__(self, ssh_curve_name: bytes, curve: ec.EllipticCurve)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\serialization\ssh.py | `def __init__(self,         _nonce: memoryview,         _public_key: SSHPublicKeyTypes,         _serial: int,         _cctype: int,         _key_id: memoryview,         _valid_principals: list[bytes],         _valid_after: int,         _valid_before: int,         _critical_options: dict[bytes, bytes],         _extensions: dict[bytes, bytes],         _sig_type: memoryview,         _sig_key: memoryview,         _inner_sig_type: memoryview,         _signature: memoryview,         _tbs_cert_body: memoryview,         _cert_key_type: bytes,         _cert_body: memoryview,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\serialization\ssh.py | `def __init__(self,         _public_key: SSHCertPublicKeyTypes | None = None,         _serial: int | None = None,         _type: SSHCertificateType | None = None,         _key_id: bytes | None = None,         _valid_principals: list[bytes] = [],         _valid_for_all_principals: bool = False,         _valid_before: int | None = None,         _valid_after: int | None = None,         _critical_options: list[tuple[bytes, bytes]] = [],         _extensions: list[tuple[bytes, bytes]] = [],)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\serialization\ssh.py | `def valid_for_all_principals(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\hazmat\primitives\twofactor\totp.py | `def __init__(self,         key: Buffer,         length: int,         algorithm: HOTPHashTypes,         time_step: int,         backend: typing.Any = None,         enforce_key_length: bool = True,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\base.py | `def __init__(self,         issuer_name: Name | None = None,         last_update: datetime.datetime | None = None,         next_update: datetime.datetime | None = None,         extensions: list[Extension[ExtensionType]] = [],         revoked_certificates: list[RevokedCertificate] = [],)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\base.py | `def __init__(self,         serial_number: int | None = None,         revocation_date: datetime.datetime | None = None,         extensions: list[Extension[ExtensionType]] = [],)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\extensions.py | `def _make_sequence_methods(field_name: str)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\extensions.py | `def iter_method(self)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\extensions.py | `def getitem_method(self, idx)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\name.py | `def __init__(self, attributes: Iterable[NameAttribute[str | bytes]])` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\ocsp.py | `def __init__(self,         resp: tuple[x509.Certificate, x509.Certificate] | None,         resp_hash: tuple[bytes, bytes, int] | None,         algorithm: hashes.HashAlgorithm,         cert_status: OCSPCertStatus,         this_update: datetime.datetime,         next_update: datetime.datetime | None,         revocation_time: datetime.datetime | None,         revocation_reason: x509.ReasonFlags | None,)` | Undocumented |
| backend\.venv\Lib\site-packages\cryptography\x509\ocsp.py | `def __init__(self,         response: _SingleResponse | None = None,         responder_id: tuple[x509.Certificate, OCSPResponderEncoding]         | None = None,         certs: list[x509.Certificate] | None = None,         extensions: list[x509.Extension[x509.ExtensionType]] = [],)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\asyncquery.py | `def _source_tuple(af, address, port)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\asyncquery.py | `def _timeout(expiration, now=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __init__(self, t: int, creator: _Creator, is_leaf: bool)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __init__(self, btree: "BTree[KT, ET]")` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def _maybe_unpark(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __exit__(self, exc_type, exc_value, traceback)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __copy__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __init__(self, key: KT, value: VT)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __init__(self,         *,         t: int = DEFAULT_T,         original: BTree | None = None,         in_order: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __init__(self, key: KT)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btree.py | `def __init__(self,         *,         t: int = DEFAULT_T,         original: BTree | None = None,         in_order: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def __init__(self, flags: NodeFlags | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def is_delegation(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def is_glue(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def is_origin(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def is_origin_or_glue(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def __init__(self, node: Node)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def __init__(self, zone: dns.zone.Zone, replacement: bool = False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\btreezone.py | `def __init__(self, version: dns.zone.Version)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\dnssec.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\dnssec.py | `def __init__(self, deny_sign, deny_validate, deny_create_ds, deny_validate_ds)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\dnssec.py | `def _need_pyca(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\dnssectypes.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\dnssectypes.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\dnssectypes.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __lt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __le__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __ge__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __gt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __init__(self, otype: OptionType | str, data: bytes | str)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __init__(self, nsid: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __init__(self, client: bytes, server: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\edns.py | `def __init__(self, agent_domain: dns.name.Name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\entropy.py | `def __init__(self, seed: bytes | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\enum.py | `def _missing_(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\enum.py | `def _check_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\enum.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\enum.py | `def _short_name(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\enum.py | `def _extra_to_text(cls, value, current_text)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\exception.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\exception.py | `def _check_kwargs(self, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\exception.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\exception.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\exception.py | `def __init__(self, exception_class)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\exception.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\exception.py | `def __exit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\immutable.py | `def __getitem__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\immutable.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\immutable.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\immutable.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __init__(self, exception: Exception, offset: int)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __init__(self, id: int | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def question(self, v)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def answer(self, v)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def authority(self, v)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def additional(self, v)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _make_tsig(keyname, algorithm, time_signed, fudge, mac, original_id, error, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _make_opt(flags=0, payload=DEFAULT_EDNS_PAYLOAD, options=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def ednsflags(self, v)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _get_one_rr_per_rrset(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _parse_rr_header(self, section, name, rdclass, rdtype)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _parse_special_rr_header(self, section, count, position, name, rdclass, rdtype)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __init__(self,         canonical_name: dns.name.Name,         answer: dns.rrset.RRset | None,         minimum_ttl: int,         cnames: List[dns.rrset.RRset],)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _maybe_import_update()` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _message_factory_from_opcode(opcode)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __init__(self,         wire,         initialize_message,         question_only=False,         one_rr_per_rrset=False,         ignore_trailing=False,         keyring=None,         multi=False,         continue_on_error=False,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _add_error(self, e)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def initialize_message(message)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def __init__(self,         text: str,         idna_codec: dns.name.IDNACodec | None,         one_rr_per_rrset: bool = False,         origin: dns.name.Name | None = None,         relativize: bool = True,         relativize_to: dns.name.Name | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\message.py | `def _make_message(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def _short_name(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __copy__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __deepcopy__(self, memo)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __getstate__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __setstate__(self, state)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __lt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __le__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __ge__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __gt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __getitem__(self, index)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __add__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def __sub__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def _wire_length(labels)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def _pad_to_max_name(name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\name.py | `def _pad_to_max_label(label, suffix_labels)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def __update_max_depth(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def __getitem__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def __setitem__(self, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def __delitem__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\namedict.py | `def has_key(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __init__(self, address: str, port: int)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __init__(self, address: str, port: int = 53)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def kind(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __init__(self,         url: str,         bootstrap_address: str | None = None,         verify: bool | str = True,         want_get: bool = False,         http_version: dns.query.HTTPVersion = dns.query.HTTPVersion.DEFAULT,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def kind(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __init__(self,         address: str,         port: int = 853,         hostname: str | None = None,         verify: bool | str = True,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def kind(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def __init__(self,         address: str,         port: int = 853,         verify: bool | str = True,         server_hostname: str | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\nameserver.py | `def kind(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def _matches_type_or_its_signature(rdtypes, rdtype, covers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\node.py | `def __init__(self, node)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\opcode.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _remaining(expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _expiration_for_this_attempt(timeout, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def __init__(self, resolver, local_port, bootstrap_address, family)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def connect_tcp(self, host, port, timeout=None, local_address=None, socket_options=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def connect_unix_socket(self, path, timeout=None, socket_options=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def __init__(self,             *args,             local_port=0,             bootstrap_address=None,             resolver=None,             family=socket.AF_UNSPEC,             **kwargs,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def __init__(self,             *args,             local_port=0,             bootstrap_address=None,             resolver=None,             family=socket.AF_UNSPEC,             **kwargs,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def connect_tcp(self, host, port, timeout, local_address)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _compute_times(timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _wait_for(fd, readable, writable, _, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _wait_for_readable(s, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _wait_for_writable(s, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _addresses_equal(af, a1, a2)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _matches_destination(af, from_address, destination, ignore_unexpected)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _destination_and_source(where, port, source, source_port, where_must_be_address=True)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _make_socket(af,     type,     source,     ssl_context,     server_hostname,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _connect(s, address, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def _tls_handshake(s, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def __init__(self, origin, relativize)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def origin_information(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def reader(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def nop(self, *args, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\query.py | `def __getattr__(self, _)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rcode.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _get_all_slots(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __getstate__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __setstate__(self, state)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __lt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __le__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __ge__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __gt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def __hash__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_rdataclass(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_rdatatype(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_name(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_uint8(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_uint16(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_uint32(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_uint48(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_int(cls, value, low=None, high=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_ipv4_address(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_ipv6_address(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_bool(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_ttl(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _as_tuple(cls, value, as_value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _processing_order(cls, iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdata.py | `def get_rdata_class(rdclass, rdtype, use_generic=True)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataclass.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataclass.py | `def _short_name(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataclass.py | `def _prefix(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataclass.py | `def _unknown_exception_class(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def _clone(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def union_update(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def intersection_update(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def _rdata_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def maybe_truncate(s)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def update_ttl(self, ttl)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def union_update(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def intersection_update(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __delitem__(self, i)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __ior__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __iand__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __iadd__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __isub__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def __copy__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def copy(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def union(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def intersection(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def difference(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdataset.py | `def symmetric_difference(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdatatype.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdatatype.py | `def _short_name(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdatatype.py | `def _prefix(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdatatype.py | `def _extra_from_text(cls, text)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdatatype.py | `def _extra_to_text(cls, value, current_text)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdatatype.py | `def _unknown_exception_class(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\renderer.py | `def prefixed_length(output, length_length)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\renderer.py | `def _track_size(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\renderer.py | `def _temporarily_seek_to(self, where)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\renderer.py | `def _write_tsig(self, tsig, keyname)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _check_kwargs(self, qnames, responses=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _fmt_kwargs(self, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _fmt_kwargs(self, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def response(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _fmt_kwargs(self, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __getattr__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __getitem__(self, i)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __delitem__(self, i)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def __init__(self, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _getaddrinfo(host=None, service=None, family=socket.AF_UNSPEC, socktype=0, proto=0, flags=0)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _getnameinfo(sockaddr, flags=0)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _getfqdn(name=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _gethostbyname(name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _gethostbyname_ex(name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\resolver.py | `def _gethostbyaddr(ip)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rrset.py | `def _clone(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rrset.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rrset.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rrset.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __init__(self, value: int, bits: int = 32)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __lt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __le__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __gt__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __ge__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __add__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __iadd__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __sub__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\serial.py | `def __isub__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __or__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __and__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __add__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __sub__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __xor__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __ior__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __iand__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __iadd__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __isub__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __ixor__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __getitem__(self, i)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def __delitem__(self, i)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\set.py | `def isdisjoint(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tokenizer.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tokenizer.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tokenizer.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tokenizer.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _ensure_immutable_rdataset(rdataset)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _ensure_immutable_node(node)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def __init__(self,         manager: TransactionManager,         replacement: bool = False,         read_only: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _raise_if_not_empty(self, method, args)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _rdataset_from_args(self, method, deleting, args)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _add(self, replace, args)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _delete(self, exact, args)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _check_ended(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _end(self, commit)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _checked_put_rdataset(self, name, rdataset)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _checked_delete_rdataset(self, name, rdtype, covers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _checked_delete_name(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def __exit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\transaction.py | `def _origin_information(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def __init__(self, gssapi_context)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def verify(self, expected)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def __init__(self, keyring)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def __call__(self, message, keyname)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def parse_tkey_and_step(cls, key, message, keyname)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def __init__(self, key, algorithm)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def verify(self, expected)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def __init__(self,         name: dns.name.Name | str,         secret: bytes | str,         algorithm: dns.name.Name | str = default_algorithm,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsig.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\tsigkeyring.py | `def b64encode(secret)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\update.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\update.py | `def prerequisite(self, v)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\update.py | `def _get_one_rr_per_rrset(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\update.py | `def _parse_rr_header(self, section, name, rdclass, rdtype)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _maybe_wakeup_one_waiter_unlocked(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _default_pruning_policy(self, zone, version)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _prune_versions_unlocked(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def policy(zone, _)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def policy(zone, _)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _end_read(self, txn)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _end_write_unlocked(self, txn)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _end_write(self, txn)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _commit_version_unlocked(self, txn, version, origin)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _commit_version(self, txn, version, origin)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\versioned.py | `def _get_next_version_id(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def get(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def _config_domain(domain)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def _split(self, text)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def _config_nameservers(self, nameservers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def _config_search(self, search)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def _config_fromkey(self, key, always_try_domain)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def _is_nic_enabled(self, lm, guid)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def format_ipv4(sockaddr_in)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\win32util.py | `def format_ipv6(sockaddr_in6)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\xfr.py | `def __init__(self, rcode)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\xfr.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\xfr.py | `def __exit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __getitem__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __setitem__(self, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __delitem__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def items(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def get(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __contains__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def get_class(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _end_read(self, txn)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _end_write(self, txn)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _commit_version(self, txn, version, origin)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __init__(self, node)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __init__(self,         zone: Zone,         id: int,         nodes: MutableMapping[dns.name.Name, dns.node.Node] | None = None,         origin: dns.name.Name | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def items(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __init__(self, zone: Zone, replacement: bool = False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __init__(self, version: Version)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def __init__(self, zone, replacement, version=None, make_immutable=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _setup_version(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _get_rdataset(self, name, rdtype, covers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _put_rdataset(self, name, rdataset)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _delete_name(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _delete_rdataset(self, name, rdtype, covers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _name_exists(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _changed(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _end_transaction(self, commit)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _set_origin(self, origin)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _iterate_rdatasets(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _iterate_names(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _get_node(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zone.py | `def _origin_information(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _check_cname_and_other_data(txn, name, rdataset)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _upper_dollarize(s)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def __init__(self,         tok: dns.tokenizer.Tokenizer,         rdclass: dns.rdataclass.RdataClass,         txn: dns.transaction.Transaction,         allow_include: bool = False,         allow_directives: bool | Iterable[str] = True,         force_name: dns.name.Name | None = None,         force_ttl: int | None = None,         force_rdclass: dns.rdataclass.RdataClass | None = None,         force_rdtype: dns.rdatatype.RdataType | None = None,         default_ttl: int | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _eat_line(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _get_identifier(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _generate_line(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def __init__(self, manager, replacement, read_only)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _get_rdataset(self, name, rdtype, covers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _get_node(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _put_rdataset(self, name, rdataset)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _delete_name(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _delete_rdataset(self, name, rdtype, covers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _name_exists(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _changed(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _end_transaction(self, commit)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _set_origin(self, origin)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _iterate_rdatasets(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def _iterate_names(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def __init__(self,         origin: dns.name.Name | None = dns.name.root,         relativize: bool = False,         rdclass: dns.rdataclass.RdataClass = dns.rdataclass.IN,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def reader(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def writer(self, replacement=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def get_class(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonefile.py | `def origin_information(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonetypes.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\zonetypes.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __init__(self, enter_result=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __exit__(self, exc_type, exc_value, traceback)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __aenter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __aexit__(self, exc_type, exc_value, traceback)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __init__(self, family: int, type: int)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def getpeername(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def getsockname(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def getpeercert(self, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __aenter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def __aexit__(self, exc_type, exc_value, traceback)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def sendto(self, what, destination, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def recvfrom(self, size, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def sendall(self, what, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def recv(self, size, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def connect_tcp(self, host, port, timeout, local_address)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def make_socket(self,         af,         socktype,         proto=0,         source=None,         destination=None,         timeout=None,         ssl_context=None,         server_hostname=None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def datagram_connection_required(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def sleep(self, interval)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def get_transport_class(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncbackend.py | `def wait_for(self, awaitable, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def _get_running_loop()` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def connection_made(self, transport)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def datagram_received(self, data, addr)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def error_received(self, exc)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def connection_lost(self, exc)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def _maybe_wait_for(awaitable, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def __init__(self, family, transport, protocol)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def sendto(self, what, destination, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def recvfrom(self, size, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def getpeername(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def getsockname(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def getpeercert(self, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def __init__(self, af, reader, writer)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def sendall(self, what, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def recv(self, size, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def getpeername(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def getsockname(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def getpeercert(self, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def __init__(self, resolver, local_port, bootstrap_address, family)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def connect_tcp(self, host, port, timeout=None, local_address=None, socket_options=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def connect_unix_socket(self, path, timeout=None, socket_options=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def sleep(self, seconds)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def __init__(self,             *args,             local_port=0,             bootstrap_address=None,             resolver=None,             family=socket.AF_UNSPEC,             **kwargs,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def make_socket(self,         af,         socktype,         proto=0,         source=None,         destination=None,         timeout=None,         ssl_context=None,         server_hostname=None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def sleep(self, interval)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def datagram_connection_required(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def get_transport_class(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_asyncio_backend.py | `def wait_for(self, awaitable, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_ddr.py | `def __init__(self, bootstrap_address, port, hostname, nameservers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_ddr.py | `def make_tls_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_ddr.py | `def ddr_tls_check_sync(self, lifetime)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_ddr.py | `def ddr_tls_check_async(self, lifetime, backend=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_ddr.py | `def _extract_nameservers_from_svcb(answer)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_immutable_ctx.py | `def __setattr__(self, name, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_immutable_ctx.py | `def __delattr__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_immutable_ctx.py | `def _immutable_init(f)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_immutable_ctx.py | `def immutable(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_immutable_ctx.py | `def __init__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_immutable_ctx.py | `def __setstate__(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_no_ssl.py | `def set_alpn_protocols(self, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_no_ssl.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_no_ssl.py | `def __exit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def _maybe_timeout(timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def __init__(self, sock)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def sendto(self, what, destination, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def recvfrom(self, size, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def getpeername(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def getsockname(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def getpeercert(self, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def __init__(self, family, stream, tls=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def sendall(self, what, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def recv(self, size, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def getpeername(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def getsockname(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def getpeercert(self, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def __init__(self, resolver, local_port, bootstrap_address, family)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def connect_tcp(self, host, port, timeout=None, local_address=None, socket_options=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def connect_unix_socket(self, path, timeout=None, socket_options=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def sleep(self, seconds)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def __init__(self,             *args,             local_port=0,             bootstrap_address=None,             resolver=None,             family=socket.AF_UNSPEC,             **kwargs,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def make_socket(self,         af,         socktype,         proto=0,         source=None,         destination=None,         timeout=None,         ssl_context=None,         server_hostname=None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def sleep(self, interval)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def get_transport_class(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\_trio_backend.py | `def wait_for(self, awaitable, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def __init__(self, connection, stream_id)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def _wait_for_wake_up(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def wait_for(self, amount, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def wait_for_end(self, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def receive(self, timeout=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def send(self, datagram, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def _add_input(self, data, is_end)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def __aenter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def __aexit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def __init__(self, connection, address, port, source, source_port, manager=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def _receiver(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def _wakeup(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def _wait_for_wake_timer(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def _sender(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def _handle_events(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def write(self, stream, data, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def make_stream(self, timeout=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def __init__(self, conf=None, verify_mode=ssl.CERT_REQUIRED, server_name=None, h3=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def __aenter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_asyncio.py | `def __aexit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def put(self, data, is_end)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def have(self, amount)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def seen_end(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def get(self, amount)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def get_all(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def __init__(self, connection, stream_id)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def headers(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def trailers(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _expiration_from_timeout(self, timeout)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _timeout_from_expiration(self, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def send_h3(self, url, datagram, post=True)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _encapsulate(self, datagram)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _common_add_input(self, data, is_end)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def __init__(self,         connection,         address,         port,         source=None,         source_port=0,         manager=None,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def is_h3(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def close_stream(self, stream_id)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def send_headers(self, stream_id, headers, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def send_data(self, stream_id, data, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _get_timer_values(self, closed_is_special=True)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _handle_timer(self, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def __init__(self, conf, verify_mode, connection_factory, server_name=None, h3=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def _connect(self,         address,         port=853,         source=None,         source_port=0,         want_session_ticket=True,         want_token=True,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def closed(self, address, port)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def is_h3(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def save_session_ticket(self, address, port, ticket)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_common.py | `def save_token(self, address, port, token)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def __init__(self, connection, stream_id)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def wait_for(self, amount, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def wait_for_end(self, expiration)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def receive(self, timeout=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def send(self, datagram, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def _add_input(self, data, is_end)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def __exit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def __init__(self, connection, address, port, source, source_port, manager)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def _read(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def _drain_wakeup(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def _worker(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def _handle_events(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def write(self, stream, data, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def send_headers(self, stream_id, headers, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def send_data(self, stream_id, data, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def make_stream(self, timeout=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def close_stream(self, stream_id)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def __init__(self, conf=None, verify_mode=ssl.CERT_REQUIRED, server_name=None, h3=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def closed(self, address, port)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def save_session_ticket(self, address, port, ticket)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def save_token(self, address, port, token)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_sync.py | `def __exit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def __init__(self, connection, stream_id)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def wait_for(self, amount)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def wait_for_end(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def receive(self, timeout=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def send(self, datagram, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def _add_input(self, data, is_end)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def __aenter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def __aexit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def __init__(self, connection, address, port, source, source_port, manager=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def _worker(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def _handle_events(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def write(self, stream, data, is_end=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def make_stream(self, timeout=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def close(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def __init__(self,         nursery,         conf=None,         verify_mode=ssl.CERT_REQUIRED,         server_name=None,         h3=False,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def __aenter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\_trio.py | `def __aexit__(self, exc_type, exc_val, exc_tb)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\__init__.py | `def null_factory(*args,  # pylint: disable=unused-argument         **kwargs,  # pylint: disable=unused-argument)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\__init__.py | `def _asyncio_manager_factory(context, *args, **kwargs  # pylint: disable=unused-argument)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\__init__.py | `def _trio_context_factory()` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\__init__.py | `def _trio_manager_factory(context, *args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\quic\__init__.py | `def factories_for_backend(backend=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dnskeybase.py | `def __init__(self, rdclass, rdtype, flags, protocol, algorithm, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dnskeybase.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dnskeybase.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dnskeybase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dnskeybase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dsbase.py | `def __init__(self, rdclass, rdtype, key_tag, algorithm, digest_type, digest)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dsbase.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dsbase.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dsbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\dsbase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\euibase.py | `def __init__(self, rdclass, rdtype, eui)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\euibase.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\euibase.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\euibase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\euibase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def __init__(self, rdclass, rdtype, preference, exchange)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def _processing_priority(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def _processing_order(cls, iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\mxbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\nsbase.py | `def __init__(self, rdclass, rdtype, target)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\nsbase.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\nsbase.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\nsbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\nsbase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\nsbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _short_name(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _prefix(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _unknown_exception_class(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _validate_key(key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def key_to_text(key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _escapify(qstring)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _split(value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def emptiness(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, keys)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, ids)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def emptiness(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, port)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, addresses)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, addresses)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, ech)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def emptiness(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_value(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_wire(self, file, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _validate_and_define(params, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def __init__(self, rdclass, rdtype, priority, target, params)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _processing_priority(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\svcbbase.py | `def _processing_order(cls, iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\tlsabase.py | `def __init__(self, rdclass, rdtype, usage, selector, mtype, cert)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\tlsabase.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\tlsabase.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\tlsabase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\tlsabase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\txtbase.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\txtbase.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def __init__(self, type: Any, gateway: str | dns.name.Name | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def _invalid_type(cls, gateway_type)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def _check(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def to_text(self, origin=None, relativize=True)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def from_text(cls, gateway_type, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def from_wire_parser(cls, gateway_type, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def __init__(self, windows: Iterable[Tuple[int, bytes]] | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def _priority_table(items)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def priority_processing_order(iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def weighted_processing_order(iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\util.py | `def parse_formatted_hex(formatted, num_chunks, chunk_size, separator)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AFSDB.py | `def subtype(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AFSDB.py | `def hostname(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AMTRELAY.py | `def relay(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AMTRELAY.py | `def __init__(self, rdclass, rdtype, precedence, discovery_optional, relay_type, relay)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AMTRELAY.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AMTRELAY.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AMTRELAY.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\AMTRELAY.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CAA.py | `def __init__(self, rdclass, rdtype, flags, tag, value)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CAA.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CAA.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CAA.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CAA.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CERT.py | `def _ctype_from_text(what)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CERT.py | `def _ctype_to_text(what)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CERT.py | `def __init__(self, rdclass, rdtype, certificate_type, key_tag, algorithm, certificate)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CERT.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CERT.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CERT.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CERT.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CSYNC.py | `def __init__(self, rdclass, rdtype, serial, flags, windows)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CSYNC.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CSYNC.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CSYNC.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\CSYNC.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DNAME.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DSYNC.py | `def _maximum(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DSYNC.py | `def _unknown_exception_class(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DSYNC.py | `def __init__(self, rdclass, rdtype, rrtype, scheme, port, target)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DSYNC.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DSYNC.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DSYNC.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\DSYNC.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def _validate_float_string(what)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def __init__(self, rdclass, rdtype, latitude, longitude, altitude)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def float_latitude(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def float_longitude(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\GPOS.py | `def float_altitude(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HINFO.py | `def __init__(self, rdclass, rdtype, cpu, os)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HINFO.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HINFO.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HINFO.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HINFO.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HIP.py | `def __init__(self, rdclass, rdtype, hit, algorithm, key, servers)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HIP.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HIP.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HIP.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\HIP.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ISDN.py | `def __init__(self, rdclass, rdtype, address, subaddress)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ISDN.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ISDN.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ISDN.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ISDN.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L32.py | `def __init__(self, rdclass, rdtype, preference, locator32)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L32.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L32.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L32.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L32.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L64.py | `def __init__(self, rdclass, rdtype, preference, locator64)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L64.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L64.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L64.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\L64.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def _exponent_of(what, desc)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def _float_to_tuple(what)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def _tuple_to_float(what)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def _encode_size(what, desc)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def _decode_size(what, desc)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def _check_coordinate_list(value, low, high)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def float_latitude(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LOC.py | `def float_longitude(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LP.py | `def __init__(self, rdclass, rdtype, preference, fqdn)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LP.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LP.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LP.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\LP.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NID.py | `def __init__(self, rdclass, rdtype, preference, nodeid)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NID.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NID.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NID.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NID.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC.py | `def __init__(self, rdclass, rdtype, next, windows)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3.py | `def __init__(self, rdclass, rdtype, algorithm, flags, iterations, salt, next, windows)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3.py | `def _next_text(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3.py | `def next_name(self, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3PARAM.py | `def __init__(self, rdclass, rdtype, algorithm, flags, iterations, salt)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3PARAM.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3PARAM.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3PARAM.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\NSEC3PARAM.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPENPGPKEY.py | `def __init__(self, rdclass, rdtype, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPENPGPKEY.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPENPGPKEY.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPENPGPKEY.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPENPGPKEY.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPT.py | `def as_option(option)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPT.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPT.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPT.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\OPT.py | `def payload(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RP.py | `def __init__(self, rdclass, rdtype, mbox, txt)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RP.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RP.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RP.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RP.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def sigtime_to_posixtime(what)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def posixtime_to_sigtime(what)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def __init__(self,         rdclass,         rdtype,         type_covered,         algorithm,         labels,         original_ttl,         expiration,         inception,         key_tag,         signer,         signature,)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def covers(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\RRSIG.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SOA.py | `def __init__(self, rdclass, rdtype, mname, rname, serial, refresh, retry, expire, minimum)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SOA.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SOA.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SOA.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SOA.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SSHFP.py | `def __init__(self, rdclass, rdtype, algorithm, fp_type, fingerprint)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SSHFP.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SSHFP.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SSHFP.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\SSHFP.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TKEY.py | `def __init__(self,         rdclass,         rdtype,         algorithm,         inception,         expiration,         mode,         error,         key,         other=b"",)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TKEY.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TKEY.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TKEY.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TKEY.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TSIG.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TSIG.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TSIG.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\TSIG.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def __init__(self, rdclass, rdtype, priority, weight, target)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def _processing_priority(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def _processing_weight(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\URI.py | `def _processing_order(cls, iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\X25.py | `def __init__(self, rdclass, rdtype, address)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\X25.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\X25.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\X25.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\X25.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ZONEMD.py | `def __init__(self, rdclass, rdtype, serial, scheme, hash_algorithm, digest)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ZONEMD.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ZONEMD.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ZONEMD.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\ANY\ZONEMD.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\CH\A.py | `def __init__(self, rdclass, rdtype, domain, address)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\CH\A.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\CH\A.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\CH\A.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\CH\A.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\A.py | `def __init__(self, rdclass, rdtype, address)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\A.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\A.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\A.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\A.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\AAAA.py | `def __init__(self, rdclass, rdtype, address)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\AAAA.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\AAAA.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\AAAA.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\AAAA.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def __init__(self, family, negation, address, prefix)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def to_wire(self, file)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def __init__(self, rdclass, rdtype, items)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\APL.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\DHCID.py | `def __init__(self, rdclass, rdtype, data)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\DHCID.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\DHCID.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\DHCID.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\DHCID.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\IPSECKEY.py | `def __init__(self, rdclass, rdtype, precedence, gateway_type, algorithm, gateway, key)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\IPSECKEY.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\IPSECKEY.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\IPSECKEY.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\IPSECKEY.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def _write_string(file, s)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def __init__(self, rdclass, rdtype, order, preference, flags, service, regexp, replacement)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def _processing_priority(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NAPTR.py | `def _processing_order(cls, iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NSAP.py | `def __init__(self, rdclass, rdtype, address)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NSAP.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NSAP.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NSAP.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\NSAP.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\PX.py | `def __init__(self, rdclass, rdtype, preference, map822, mapx400)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\PX.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\PX.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\PX.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\PX.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\PX.py | `def _processing_priority(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\PX.py | `def _processing_order(cls, iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def __init__(self, rdclass, rdtype, priority, weight, port, target)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def _processing_priority(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def _processing_weight(self)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\SRV.py | `def _processing_order(cls, iterable)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\WKS.py | `def __init__(self, rdclass, rdtype, address, protocol, bitmap)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\WKS.py | `def to_text(self, origin=None, relativize=True, **kw)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\WKS.py | `def from_text(cls, rdclass, rdtype, tok, origin=None, relativize=True, relativize_to=None)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\WKS.py | `def _to_wire(self, file, compress=None, origin=None, canonicalize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\dns\rdtypes\IN\WKS.py | `def from_wire_parser(cls, rdclass, rdtype, parser, origin=None)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def read_items()` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def websocket_endpoint(websocket: WebSocket)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def read_items()` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def replace_item(item_id: str, item: Item)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def create_item(item: Item)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def delete_item(item_id: str)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def get_item_options()` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def get_items_headers(response: Response)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def update_item(item: Item)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def trace_item(item_id: str)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def __init__(self, name: str)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\applications.py | `def unicorn_exception_handler(request: Request, exc: UnicornException)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\background.py | `def write_notification(email: str, message="")` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\background.py | `def send_notification(email: str, background_tasks: BackgroundTasks)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\datastructures.py | `def create_upload_file(file: UploadFile)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\datastructures.py | `def __init__(self, value: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\exceptions.py | `def read_item(item_id: str)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\param_functions.py | `def common_parameters(q: str | None = None, skip: int = 0, limit: int = 100)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def read_users()` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def websocket_endpoint(websocket: WebSocket)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def read_users()` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def read_items()` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def replace_item(item_id: str, item: Item)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def create_item(item: Item)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def delete_item(item_id: str)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def get_item_options()` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def get_items_headers(response: Response)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def update_item(item: Item)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\routing.py | `def trace_item(item_id: str)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\security\api_key.py | `def __init__(self,         location: APIKeyIn,         name: str,         description: str | None,         scheme_name: str | None,         auto_error: bool,)` | Undocumented |
| backend\.venv\Lib\site-packages\fastapi\security\http.py | `def __init__(self,         *,         scheme: str,         scheme_name: str | None = None,         description: str | None = None,         auto_error: bool = True,)` | Undocumented |
| backend\.venv\Lib\site-packages\gridfs\asynchronous\grid_file.py | `def __init__(self, grid_out: AsyncGridOut, chunks: AsyncCollection[Any], session: AsyncClientSession)` | Undocumented |
| backend\.venv\Lib\site-packages\gridfs\synchronous\grid_file.py | `def __init__(self, grid_out: GridOut, chunks: Collection[Any], session: ClientSession)` | Undocumented |
| backend\.venv\Lib\site-packages\jwt\api_jwk.py | `def __init__(self, jwk_set: PyJWKSet)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def __init__(self, path=None, new=False, autoload=True, autosave=False,                  encoding="utf-8", return_unicode=PY3,)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def path(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def path(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _parse_record(self, record, lineno)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def clean(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _render_record(self, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _encode_realm(self, realm)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _init_default_schemes()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _init_htpasswd_context()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def __init__(self, path=None, default_scheme=None, context=htpasswd_context,                  **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _parse_record(self, record, lineno)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _render_record(self, user, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def has_user(self, user)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def rename(self, old, new)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def __init__(self, path=None, default_realm=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _parse_record(self, record, lineno)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _render_record(self, key, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _require_realm(self, realm)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _encode_realm(self, realm)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def _encode_key(self, user, realm)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def has_user(self, user, realm=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def rename_realm(self, old, new)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apache.py | `def rename(self, old, new, realm=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apps.py | `def _load_master_config()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apps.py | `def _iter_ldap_crypt_schemes()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\apps.py | `def _iter_host_ldap_schemes()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def __init__(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def render_key(key)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def render_value(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def to_file(self, stream, section="passlib")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def __init__(self, source)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _norm_scheme_option(self, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _norm_context_option(self, cat, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def get_base_handler(self, scheme)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def expand_settings(handler)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def test(cat)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _init_records(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _create_record(handler, category=None, deprecated=False, **settings)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def disabled_record(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def __init__(self, schemes=None,                  # keyword only...                  policy=_UNSET, # <-- deprecated                  _autoload=True, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _get_policy(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _set_policy(self, policy)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def helper(stream)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _simplify(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def strip_items(target, filter)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def categories(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def options(self, scheme, category=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def write_to_path(self, path, section="passlib", update=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def reset_min_verify_time(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def __init__(self, schemes=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def _lazy_init(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\context.py | `def __getattribute__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def __init__(self, hasher, backend)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def __init__(self, max_size, msg=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def __init__(self, cls, msg=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def __init__(self, msg=None, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def __init__(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def __init__(self, message=None, value=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def __str__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\exc.py | `def _get_name(handler)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ifc.py | `def builder(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ifc.py | `def verify(cls, secret, hash, **context_kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ifc.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ifc.py | `def genconfig(cls, **setting_kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ifc.py | `def normhash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ifc.py | `def parsehash(cls, hash, checksum=True, sanitize=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ifc.py | `def bitsize(cls, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def _total_self_info(source)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __init__(self, entropy=None, length=None, rng=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def next(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __init__(self, chars=None, charset=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def symbol_count(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __next__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def extract(row)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __init__(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __getitem__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __setitem__(self, key, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __delitem__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def _keyset(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __contains__(self, key)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __init__(self, wordset=None, words=None, sep=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def symbol_count(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\pwd.py | `def __next__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\registry.py | `def __getattr__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\registry.py | `def __setattr__(self, attr, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\registry.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\registry.py | `def __dir__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def __init__(self, secrets=None, default_tag=None, encrypt_cost=None,                  secrets_path=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def iter_pairs(source)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def _parse_secret_pair(self, tag, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def __init__(self, key=None, format="base32",                  # keyword only...                  new=False, digits=None, alg=None, size=None, period=None,                  label=None, issuer=None, changed=False,                  **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def encrypted_key(self, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def generate_range(self, size, time=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def verify(cls, token, source, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def _as_tuple(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def start_time(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def _as_tuple(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\totp.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\des.py | `def _pack64(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\des.py | `def _unpack64(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\des.py | `def _pack56(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\des.py | `def _unpack56(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\des.py | `def expand_7bit(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def check_table(name)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def const(msg=b"")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def const(source=b"")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def const(source=b"")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def _as_tuple(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def finalize()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def _get_pbkdf2_looper(digest_size)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def helper(keyed_hmac, digest, rounds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def helper(keyed_hmac, digest, rounds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def _get_pbkdf2_looper(digest_size)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\digest.py | `def _pbkdf2_looper(keyed_hmac, digest, rounds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_md4.py | `def __init__(self, content=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_md4.py | `def copy(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_md4.py | `def digest(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_md4.py | `def hexdigest(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\scrypt\_builtin.py | `def __init__(self, n, r, p)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\scrypt\_builtin.py | `def integerify(X)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\scrypt\_builtin.py | `def vgen()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\scrypt\_gen_files.py | `def salsa20(input)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\scrypt\__init__.py | `def stdlib_scrypt_wrapper(secret, salt, n, r, p, keylen)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\scrypt\__init__.py | `def _has_backend(name)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\base.py | `def _init_constants()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\base.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\_gen_files.py | `def varlist(name, count)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\_gen_files.py | `def render_encipher(write, indent=0)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\_gen_files.py | `def write_encipher_function(write, indent=0)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\_gen_files.py | `def encipher(self, l, r)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\_gen_files.py | `def write_expand_function(write, indent=0)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\_gen_files.py | `def expand(self, key_words)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\crypto\_blowfish\_gen_files.py | `def write(indent, msg, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def wrapper(*args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __init__(self, context=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def reset_hashers(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __init__(self, context=None, get_user_category=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __init__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __get__(self, obj, cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __set__(self, obj, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __delete__(self, obj)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __init__(self, passlib_handler)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __name__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def _has_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def algorithm(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def salt(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def verify(self, password, encoded)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def encode(self, password, salt=None, rounds=None, iterations=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def safe_summary(self, encoded)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def must_update(self, encoded)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __init__(self, hasher)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def django_name(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def identify(self, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def verify(self, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def register_hasher(hasher)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def __init__(self, log=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def isactive(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def _get_path(self, key, default=_UNSET)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def _set_path(self, path, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def wrapper(*args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def peek_unpatched_func(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def patch_many(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def builder(func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def unpatch(self, path, unpatch_conflicts=True)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\ext\django\utils.py | `def unpatch_all(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _validate_constraints(cls, memory_cost, parallelism)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def __init__(self, type=None, type_d=False, version=None, memory_cost=None, data=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _norm_type(cls, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _norm_version(cls, version)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _norm_memory_cost(cls, memory_cost, relaxed=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _calc_needs_update(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def genhash(cls, secret, config)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _load_backend_mixin(mixin_cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def genhash(cls, secret, config)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _load_backend_mixin(mixin_cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\argon2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def needs_update(cls, hash, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _generate_salt(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _norm_salt(cls, salt, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _norm_checksum(self, checksum, relaxed=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def assert_lacks_wrap_bug(ident)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _norm_digest_args(cls, secret, ident, new=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _load_backend_mixin(mixin_cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _load_backend_mixin(mixin_cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _load_backend_mixin(mixin_cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum_threadsafe(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum_raw(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _load_backend_mixin(mixin_cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _load_backend_mixin(mixin_cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def genhash(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _check_truncate_policy(cls, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def __init__(self, version=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _norm_version(cls, version)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\bcrypt.py | `def _calc_needs_update(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\cisco.py | `def same_as_pix(cls, secret, user="")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\cisco.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\cisco.py | `def __init__(self, salt=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\cisco.py | `def _generate_salt()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\cisco.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\cisco.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _load_backend_os_crypt(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_checksum_os_crypt(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _load_backend_builtin(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_checksum_builtin(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _generate_rounds(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_needs_update(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _load_backend_os_crypt(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_checksum_os_crypt(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _load_backend_builtin(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_checksum_builtin(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _norm_checksum(self, checksum, relaxed=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\des_crypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\digests.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\digests.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\digests.py | `def verify(cls, secret, hash, user, realm, encoding="utf-8")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\digests.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\digests.py | `def genconfig(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\digests.py | `def genhash(cls, secret, config, user, realm, encoding=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def _import_des_crypt()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\django.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\fshp.py | `def __init__(self, variant=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\fshp.py | `def _norm_variant(cls, variant)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\fshp.py | `def checksum_alg(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\fshp.py | `def checksum_size(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\fshp.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\fshp.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\fshp.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def genconfig(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def _init_ldap_crypt_handlers()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\ldap_digests.py | `def get_host_ldap_crypt_schemes()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def offset(i)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def _load_backend_os_crypt(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def _calc_checksum_os_crypt(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def _load_backend_builtin(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def _calc_checksum_builtin(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\md5_crypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def __init__(self, enable_wildcard=False, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def verify(cls, secret, hash, enable_wildcard=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def genhash(cls, secret, config, marker=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def disable(cls, hash=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def enable(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def verify(cls, secret, hash, encoding=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def genconfig(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\misc.py | `def genhash(cls, secret, config, encoding=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def _raw_mssql(secret, salt)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mssql.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mysql.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mysql.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mysql.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\mysql.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\oracle.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\oracle.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\oracle.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\oracle.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\oracle.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def _get_config(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\pbkdf2.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\phpass.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\phpass.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\phpass.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\postgres.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def __init__(self, algs=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _norm_checksum(self, checksum, relaxed=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _calc_needs_update(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _calc_checksum(self, secret, alg=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def verify(cls, secret, hash, full=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _test_reference_scram()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def from_string(cls, hash, alg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def __init__(self, alg, salt, rounds, digest=None, password=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def get_hash(self, data)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def get_client_proof(self, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def get_encoded_client_proof(self, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def get_client_sig(self, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def get_server_sig(self, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def get_encoded_server_sig(self, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def format_server_response(self, client_nonce, server_nonce)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def format_auth_msg(self, username, client_nonce, server_nonce, ##                        header='c=biws')` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _calc_get_hmac(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _calc_client_key(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _calc_stored_key(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _calc_server_key(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def _calc_encoded_salt(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def __getattr__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scram.py | `def __dir__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def parse(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def _parse_scrypt_string(cls, suffix)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def _parse_7_string(cls, suffix)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def __init__(self, block_size=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def _norm_block_size(cls, block_size, relaxed=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def _generate_salt(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def backends(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def get_backend(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def has_backend(cls, name="any")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def set_backend(cls, name="any", dryrun=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\scrypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha1_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha1_crypt.py | `def to_string(self, config=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha1_crypt.py | `def _load_backend_os_crypt(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha1_crypt.py | `def _calc_checksum_os_crypt(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha1_crypt.py | `def _load_backend_builtin(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha1_crypt.py | `def _calc_checksum_builtin(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def offset(i)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def __init__(self, implicit_rounds=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def _parse_salt(self, salt)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def _parse_rounds(self, rounds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def _load_backend_os_crypt(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def _calc_checksum_os_crypt(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def _load_backend_builtin(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sha2_crypt.py | `def _calc_checksum_builtin(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sun_md5_crypt.py | `def __init__(self, bare_salt=False, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sun_md5_crypt.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sun_md5_crypt.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sun_md5_crypt.py | `def to_string(self, _withchk=True)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\sun_md5_crypt.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def raw_nthash(cls, secret, hex=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _norm_hash(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\handlers\windows.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_00_from_path(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_01_delete_autosave(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_02_set_password_autosave(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def check(scheme)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_10_repr(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_11_malformed(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_12_from_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def hash_scheme(pwd, scheme)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def hash_scheme(pwd, scheme)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_01_delete_autosave(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apache.py | `def test_11_malformed(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_master_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_custom_app_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_django16_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_django_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_ldap_nocrypt_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_ldap_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_ldap_mysql_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_postgres_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_phppass_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_phpbb3_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_apps.py | `def test_roundup_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def merge_dicts(first, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def parse(**kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def getdep(ctx, category=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def parse(v)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def assertHandlerDerivedFrom(self, handler, base, msg=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def options(ctx, scheme, category=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def wrapper(secret, scheme=None, category=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def needs_update(cls, hash, secret=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def getstate(ctx, category=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def test_callable_constructor(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context.py | `def onload(flag=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context_deprecated.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context_deprecated.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context_deprecated.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_context_deprecated.py | `def create_policy(flag=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_builtin_md4.py | `def has_native_md4()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_builtin_md4.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_builtin_md4.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_builtin_md4.py | `def wrapper(name, *args)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_digest.py | `def helper(secret=b'secret', salt=b'salt', rounds=1, keylen=1, hash='md5')` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_digest.py | `def helper(secret=b'password', salt=b'salt', rounds=1, keylen=None, digest="sha1")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_digest.py | `def helper(secret=b'password', salt=b'salt', rounds=1, keylen=None, digest="sha1")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def descriptionPrefix(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def run_scrypt(secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def run_scrypt(salt)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def run_scrypt(n)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def run_scrypt(r, n=2, p=2)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def run_scrypt(p, n=2, r=2)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def run_scrypt(keylen)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def _can_import_cffi_scrypt()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def _can_import_stdlib_scrypt()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_crypto_scrypt.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def saved_passwords(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def pop_saved_passwords(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def create_mock_setter()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def setter(password)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def popstate()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def _do_test_invalid_hash_value(self, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def dummy()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def get_category(user)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django.py | `def get_category(user)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django_source.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django_source.py | `def update_schemes(**kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_ext_django_source.py | `def tearDown(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def test_90_internal(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def test_77_fuzz_input(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def test_80_user(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def random_password(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def populate_settings(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def test_77_fuzz_input(self, **ignored)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def accept_password_pair(self, secret, other)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def _test_pair(self, h, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def test_pairs(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def do_verify(self, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def test_76_hash_border(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def hashtest(version, t, logM, p, secret, salt, hex_digest, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def setUpWarnings(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def do_stub_encrypt(self, handler=None, **settings)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_03_legacy_hash_workflow(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_keyid_parameter(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_data_parameter(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_keyid_and_data_parameters(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_type_kwd(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_type_using(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def effective_type(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_needs_update_w_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def test_needs_update_w_version(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def random_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def random_memory_cost(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_argon2.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def populate_settings(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def fuzz_verifier_bcrypt(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def fuzz_verifier_pybcrypt(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def fuzz_verifier_bcryptor(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def check_padding(hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def populate_settings(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def require_many_idents(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def test_30_HasOneIdent(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def random_ident(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def test_using_version(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_bcrypt.py | `def _get_safe_crypt_handler_backend(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_cisco.py | `def calc(secret, for_hash=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def vstr(version)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def _require_django_support(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def fuzz_verifier_django(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def random_salt_size(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def populate_settings(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def random_ident(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def populate_settings(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def random_ident(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def setUpWarnings(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def do_stub_encrypt(self, handler=None, **settings)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def test_03_legacy_hash_workflow(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def random_type(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_django.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_pbkdf2.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_pbkdf2.py | `def parse(algs, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_pbkdf2.py | `def vpart(s, h)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_pbkdf2.py | `def vfull(s, h)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_scrypt.py | `def setUpWarnings(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_scrypt.py | `def populate_settings(self, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_handlers_scrypt.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_hosts.py | `def check_unix_disabled(self, ctx)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_hosts.py | `def test_linux_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_hosts.py | `def test_bsd_contexts(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_hosts.py | `def test_host_context(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_pwd.py | `def test_total_self_info(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_pwd.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_registry.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_registry.py | `def restore()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_totp.py | `def to_b32_size(raw_size)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_totp.py | `def require_aes_support(self, canary=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_totp.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_totp.py | `def now()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_totp.py | `def assertTotpMatch(self, match, time, skipped=0, period=30, window=30, msg='')` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_classproperty(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def xprop(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_deprecated_function(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_memoized_property(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def get_hash(secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def consteq_supports_string(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def scale(c)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_splitcomma(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_constructor(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_int6(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_int12(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_int24(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils.py | `def test_int64(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def helper(size)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def __init__(self, flag=False, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def genhash(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def verify(cls, secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def norm_checksum(checksum=None, **k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def norm_checksum(*a, **k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def norm_salt(**k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def gen_salt(sz, **k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def norm_rounds(**k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _load_backend_a(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _load_backend_b(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _calc_checksum_a(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _calc_checksum_b(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _calc_checksum_a(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _calc_checksum_b(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def norm_ident(**k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def __init__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def __exit__(self, *exc_info)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def test_10_wrapped_attributes(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def test_11_wrapped_methods(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def test_12_ident(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def from_string(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def test_bad_kwds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_handlers.py | `def test_bad_kwds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_md4.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_md4.py | `def get_md4_const(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_pbkdf2.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_pbkdf2.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_pbkdf2.py | `def helper(secret=b'secret', salt=b'salt', rounds=1, keylen=1, hash='md5')` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_pbkdf2.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_pbkdf2.py | `def helper(secret=b'password', salt=b'salt', rounds=1, keylen=None, prf="hmac-sha1")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_pbkdf2.py | `def helper(secret=b'password', salt=b'salt', rounds=1, keylen=None, prf="hmac-sha1")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_utils_pbkdf2.py | `def prf(key, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_win32.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_win32.py | `def test_lmhash(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\test_win32.py | `def test_nthash(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def _get_timer_resolution(timer)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def sample()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def get_alt_backend(*args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def wrapper(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def limit(value, lower, upper)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def builder(func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def wrapper(*args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __unittest_skip__(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __test__(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def _formatMessage(self, msg, std)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def assertRaises(self, _exc_type, _callable=None, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def assertEquals(self, *a, **k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __init__(self, case, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __exit__(self, *exc_info)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def _formatWarning(self, entry)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def _formatWarningList(self, wlist)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def _render_title(_msg=None, **params)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def cleaner()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def cleanup()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def forbidden_characters(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def descriptionPrefix(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def check_returned_native_str(self, result, func_name)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def create_backend_case(cls, backend)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def require_salt(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def require_salt_info(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def sampler(func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def require_rounds_info(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def parse(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def get_effective_range(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def assert_rounds_range(vary_rounds, lower, upper)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def require_many_idents(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def effective_ident(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def parse_value(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def is_secret_8bit(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def require_parsehash(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def vname(v)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def wrapper()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def launch(n)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def maker(backend)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def func(secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def fuzz_verifier_default(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def check_default(secret, hash, **ctx)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __init__(self, test, rng)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def gendict(map)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def random_rounds(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def random_salt_size(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def random_ident(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def setUp(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def crypt_stub(secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def mock_crypt(secret, config)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def test(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def random_user(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __init__(self, reset_filter="always", reset_registry=".*", **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\tests\utils.py | `def __exit__(self, *exc_info)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\binary.py | `def __init__(self, charmap, big=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\binary.py | `def repair_unused(self, source)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\binary.py | `def transcode(self, source, other)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\binary.py | `def random_encoded_bytes(self, size, random=None, unicode=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\binary.py | `def __init__(self, *args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\binary.py | `def _lazy_init(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\binary.py | `def __getattribute__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __init__(self, func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __get__(self, obj, cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __init__(self, func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __get__(self, obj, cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def wrapper()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def clear_cache()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __init__(self, func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __get__(self, obj, cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __init__(self, func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __get__(self, obj, cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def __func__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def build(func)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def wrapper(*args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\decor.py | `def wrapper(*args, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\des.py | `def mdes_encrypt_int_block(key, input, salt=0, rounds=1)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def warn_hash_settings_deprecation(handler, kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def parse_mc3_long(hash, prefix, sep=_UDOLLAR, handler=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __init__(self, checksum=None, use_defaults=False, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def from_string(cls, hash, **context)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def verify(cls, secret, hash, **context)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def genconfig(cls, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def genhash(cls, secret, config, **context)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def needs_update(cls, hash, secret=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def from_string(cls, hash, **context)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def to_string(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def inner(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __init__(self, encoding=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __init__(self, user=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def verify(cls, secret, hash, user=None, **context)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def genhash(cls, secret, config, user=None, **context)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def bitsize(cls, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __init__(self, ident=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def identify(cls, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __init__(self, salt=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _parse_salt(self, salt)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _truncate_salt(salt, mx)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _generate_salt(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def linear_to_native(value, upper)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def linear_to_native(value, upper)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __init__(self, rounds=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _parse_rounds(self, rounds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __init__(self, parallelism=None, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _norm_parallelism(cls, parallelism, relaxed=False)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _set_backend(cls, name, dryrun)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _get_backend_loader(cls, name)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _calc_checksum(self, secret)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def loader()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __load_legacy_backend(cls, name)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _set_wrapped(self, handler)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def _get_wrapped(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def ident_values(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __dir__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def __setattr__(self, attr, value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def needs_update(self, hash, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def identify(self, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def genconfig(self, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def genhash(self, secret, config, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\handlers.py | `def verify(self, secret, hash, **kwds)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\pbkdf2.py | `def hmac(key, msg)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def _as_tuple(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def __getitem__(self, idx)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def __len__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def __eq__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def bytes_to_int(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def int_to_bytes(value, count)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def bytes_to_int(value)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def int_to_bytes(value, count)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def sanity_check()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def to_native_str(source, encoding="utf-8", param="value")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def to_native_str(source, encoding="utf-8", param="value")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def to_hash_str(source, encoding="ascii")` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def safe_crypt(secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def safe_crypt(secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def safe_crypt(secret, hash)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def helper()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def helper()` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def has_many_backends(handler)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\__init__.py | `def has_raw_salt(handler)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def __setitem__(self, key, value, dict_setitem=dict.__setitem__)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def __delitem__(self, key, dict_delitem=dict.__delitem__)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def __reversed__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def items(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def iterkeys(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def itervalues(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def iteritems(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def setdefault(self, key, default=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def __repr__(self, _repr_running={})` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def __reduce__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def copy(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\_ordered_dict.py | `def __ne__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def uascii_to_str(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def bascii_to_str(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def str_to_uascii(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def str_to_bascii(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def byte_elem_value(elem)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def iter_byte_values(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def iter_byte_chars(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def uascii_to_str(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def bascii_to_str(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def str_to_uascii(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def str_to_bascii(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def join_byte_values(values)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def iter_byte_values(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def iter_byte_chars(s)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def lrange(*a,**k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def lmap(*a, **k)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def iteritems(d)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def itervalues(d)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def nextgetter(obj)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def iteritems(d)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def itervalues(d)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def nextgetter(obj)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def is_mapping(obj)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def __init__(self, enter_result=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def __enter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def __exit__(self, *exc_info)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def replace_module(cls, name, attrmap)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def __init__(self, name, attrmap, proxy=None)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def __getattr__(self, attr)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\passlib\utils\compat\__init__.py | `def __dir__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def is_empty(v)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def visit_Constant(self, node)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, type, dim, dim_quals, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, subscript, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, op, lvalue, rvalue, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, alignment, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, op, left, right, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, expr, stmts, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, to_type, expr, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, block_items, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, type, init, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, type, value, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, quals, align, storage, funcspec, type, init, bitsize, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, decls, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, stmts, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, cond, stmt, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, values, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, value, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, enumerators, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, exprs, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, ext, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, init, cond, next, stmt, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, args, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, args, type, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, decl, param_decls, body, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, names, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, cond, iftrue, iffalse, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, exprs, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, stmt, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, expr, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, params, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, quals, type, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, expr, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, cond, message, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, decls, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, type, field, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, cond, stmt, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, cond, iftrue, iffalse, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, declname, quals, align, type, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, quals, storage, type, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, quals, align, type, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, op, expr, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, name, decls, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, cond, stmt, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __init__(self, string, coord=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_ast.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\c_parser.py | `def make_array_decl(dim, dim_quals)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def __init__(self, name, contents)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def generate_source(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def _gen_init(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def _gen_children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def children(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def _gen_iter(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def __iter__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def _gen_attr_names(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def is_empty(v)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def __init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pycparser\_ast_gen.py | `def visit_Constant(self, node)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\color.py | `def __init__(self, r: float, g: float, b: float, alpha: Optional[float])` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\config.py | `def __init__(self, name: str)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\functional_serializers.py | `def field_serializer(# noqa: D417     field: str,     /,     *fields: str,     mode: Literal['plain', 'wrap'] = 'plain',     # TODO PEP 747 (grep for 'return_type' on the whole code base)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\functional_serializers.py | `def serialize_courses_in_order(self, courses: set[str])` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\functional_serializers.py | `def serialize_model(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\functional_validators.py | `def validate_timestamp(v, handler)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\functional_validators.py | `def ensure_foobar(cls, v: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\mypy.py | `def __init__(self,         name: str,         alias: str | None,         is_frozen: bool,         has_dynamic_alias: bool,         has_default: bool,         strict: bool | None,         line: int,         column: int,         type: Type | None,         info: TypeInfo,)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\mypy.py | `def __init__(self, name)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\mypy.py | `def __init__(self,         forbid_extra: bool | None = None,         frozen: bool | None = None,         from_attributes: bool | None = None,         populate_by_name: bool | None = None,         validate_by_alias: bool | None = None,         validate_by_name: bool | None = None,         has_alias_generator: bool | None = None,         strict: bool | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\networks.py | `def wrap_val(v, h)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\networks.py | `def wrap_val(v, h)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\networks.py | `def check_db_name(cls, v)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\networks.py | `def __init__(self, name: str, email: str)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\root_model.py | `def __init_subclass__(cls, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\types.py | `def dump_secret(self, v)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\types.py | `def __init__(self, card_number: str)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\deprecated\decorator.py | `def __init__(self, function: 'AnyCallable', config: 'ConfigType')` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\class_validators.py | `def __init__(self,         func: AnyCallable,         pre: bool = False,         each_item: bool = False,         always: bool = False,         check_fields: bool = False,         skip_on_failure: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\color.py | `def __init__(self, r: float, g: float, b: float, alpha: Optional[float])` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\decorator.py | `def __init__(self, function: 'AnyCallableT', config: 'ConfigType')` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\env_settings.py | `def __init__(self, init_kwargs: Dict[str, Any])` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\env_settings.py | `def __init__(self,         env_file: Optional[DotenvType],         env_file_encoding: Optional[str],         env_nested_delimiter: Optional[str] = None,         env_prefix_len: int = 0,)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\env_settings.py | `def __init__(self, secrets_dir: Optional[StrPath])` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\errors.py | `def __init__(self, allowed_schemes: Set[str])` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\main.py | `def __new__(mcs, name, bases, namespace, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\main.py | `def __setattr__(self, name, value)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\mypy.py | `def __init__(self, name: str, is_required: bool, alias: Optional[str], has_dynamic_alias: bool, line: int, column: int)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\mypy.py | `def __init__(self,         forbid_extra: Optional[bool] = None,         allow_mutation: Optional[bool] = None,         frozen: Optional[bool] = None,         orm_mode: Optional[bool] = None,         allow_population_by_field_name: Optional[bool] = None,         has_alias_generator: Optional[bool] = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\networks.py | `def __init__(self, *args: Any, hosts: Optional[List['HostParts']] = None, **kwargs: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\networks.py | `def __init__(self, name: str, email: str)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\types.py | `def __init__(self, value: str)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\types.py | `def __init__(self, value: bytes)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\types.py | `def __init__(self, card_number: str)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\utils.py | `def __init__(self, obj: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def inner(f)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def resolve_json(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def resolve_conbytes(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def resolve_condecimal(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def resolve_confloat(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def resolve_conint(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def resolve_condate(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\v1\_hypothesis_plugin.py | `def resolve_constr(cls)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_config.py | `def __init__(self, config: ConfigDict | dict[str, Any] | type[Any] | None, *, check: bool = True)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_config.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_config.py | `def __init__(self, config_wrapper: ConfigWrapper)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_config.py | `def push(self, config_wrapper: ConfigWrapper | ConfigDict | None)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_decorators.py | `def __post_init__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_discriminated_union.py | `def __init__(self, discriminator: str, definitions: dict[str, core_schema.CoreSchema])` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_docs_extraction.py | `def dedent_workaround()` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_fields.py | `def __init__(self, metadata: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_fields.py | `def _apply_field_title_generator_to_field_info(title_generator: Callable[[str, FieldInfo], str],     field_name: str,     field_info: FieldInfo,)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_forward_ref.py | `def __or__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_forward_ref.py | `def __ror__(self, other)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_model_construction.py | `def __init__(self, obj: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_signature.py | `def __repr__(self)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_utils.py | `def func(a, /, b, *, c)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_validate_call.py | `def wrapper_function(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic\_internal\_validate_call.py | `def wrapper_function(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def field_before_validator_function(function: WithInfoValidatorFunction, field_name: str, schema: CoreSchema, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def general_before_validator_function(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def field_after_validator_function(function: WithInfoValidatorFunction, field_name: str, schema: CoreSchema, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def general_after_validator_function(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def field_wrap_validator_function(function: WithInfoWrapValidatorFunction, field_name: str, schema: CoreSchema, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def general_wrap_validator_function(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def field_plain_validator_function(function: WithInfoValidatorFunction, field_name: str, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pydantic_core\core_schema.py | `def general_plain_validator_function(*args, **kwargs)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\client_options.py | `def __init__(self,         username: str,         password: str,         database: Optional[str],         options: Mapping[str, Any],         is_sync: bool = True,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\common.py | `def __init__(self, *args: Any, **kwargs: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\compression_support.py | `def __init__(self, compressors: list[str], zlib_compression_level: int)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\compression_support.py | `def __init__(self, level: int)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\logger.py | `def __init__(self, **kwargs: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\message.py | `def __init__(self,         database_name: str,         cmd_name: str,         conn: _AgnosticConnection,         operation_id: int,         listeners: _EventListeners,         session: Optional[_AgnosticClientSession],         op_type: int,         codec: CodecOptions[Any],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\message.py | `def __init__(self,         database_name: str,         cmd_name: str,         conn: _AgnosticConnection,         operation_id: int,         listeners: _EventListeners,         session: Optional[_AgnosticClientSession],         op_type: int,         codec: CodecOptions[Any],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\message.py | `def __init__(self,         database_name: str,         cmd_name: str,         conn: _AgnosticConnection,         operation_id: int,         listeners: _EventListeners,         session: Optional[_AgnosticClientSession],         codec: CodecOptions[Any],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\message.py | `def __init__(self, flags: int, cursor_id: int, number_returned: int, documents: bytes | memoryview)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\message.py | `def __init__(self, flags: int, payload_document: bytes | memoryview)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\message.py | `def __init__(self,         flags: int,         db: str,         coll: str,         ntoskip: int,         spec: Mapping[str, Any],         fields: Optional[Mapping[str, Any]],         codec_options: CodecOptions[Any],         read_preference: _ServerMode,         limit: int,         batch_size: int,         read_concern: ReadConcern,         collation: Optional[Mapping[str, Any]],         session: Optional[_AgnosticClientSession],         client: _AgnosticMongoClient,         allow_disk_use: Optional[bool],         exhaust: bool,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\message.py | `def __init__(self,         db: str,         coll: str,         ntoreturn: int,         cursor_id: int,         codec_options: CodecOptions[Any],         read_preference: _ServerMode,         session: Optional[_AgnosticClientSession],         client: _AgnosticMongoClient,         max_await_time_ms: Optional[int],         conn_mgr: Any,         exhaust: bool,         comment: Any,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def started(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def succeeded(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def failed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def opened(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def description_changed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def closed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def started(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def succeeded(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def failed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def opened(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def description_changed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def closed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def pool_created(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def pool_ready(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def pool_cleared(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def pool_closed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def connection_created(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def connection_ready(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def connection_closed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def connection_check_out_started(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def connection_check_out_failed(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def connection_checked_out(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def connection_checked_in(self, event)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def __init__(self, address: _Address, connection_id: int, reason: str)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\monitoring.py | `def __init__(self, listeners: Optional[Sequence[_EventListener]])` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\network_layer.py | `def __init__(self, conn: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\network_layer.py | `def __init__(self, conn: tuple[Transport, PyMongoProtocol])` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\network_layer.py | `def __init__(self, conn: Union[socket.socket, _sslConn])` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\network_layer.py | `def __init__(self, timeout: Optional[float] = None)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\operations.py | `def __init__(self,         filter: Mapping[str, Any],         doc: Union[Mapping[str, Any], _Pipeline],         upsert: Optional[bool],         collation: Optional[_CollationIn],         array_filters: Optional[list[Mapping[str, Any]]],         hint: Optional[_IndexKeyHint],         namespace: Optional[str],         sort: Optional[Mapping[str, Any]],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\pool_options.py | `def __init__(self,         max_pool_size: int = MAX_POOL_SIZE,         min_pool_size: int = MIN_POOL_SIZE,         max_idle_time_seconds: Optional[int] = MAX_IDLE_TIME_SEC,         connect_timeout: Optional[float] = None,         socket_timeout: Optional[float] = None,         wait_queue_timeout: Optional[int] = WAIT_QUEUE_TIMEOUT,         ssl_context: Optional[SSLContext] = None,         tls_allow_invalid_hostnames: bool = False,         event_listeners: Optional[_EventListeners] = None,         appname: Optional[str] = None,         driver: Optional[DriverInfo] = None,         compression_settings: Optional[CompressionSettings] = None,         max_connecting: int = MAX_CONNECTING,         pause_enabled: bool = True,         server_api: Optional[ServerApi] = None,         load_balanced: Optional[bool] = None,         credentials: Optional[MongoCredential] = None,         is_sync: Optional[bool] = True,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\pool_shared.py | `def _query(key, name, default)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\pool_shared.py | `def _set_keepalive_times(sock)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\pyopenssl_context.py | `def __init__(self,         ctx: _SSL.Context,         sock: Optional[_socket.socket],         suppress_ragged_eofs: bool,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\pyopenssl_context.py | `def __init__(self, protocol: int)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\read_preferences.py | `def __init__(self, pref: _ServerMode)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\results.py | `def __init__(self,         raw_result: Optional[Mapping[str, Any]],         acknowledged: bool,         in_client_bulk: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\server_selectors.py | `def __init__(self,         topology_description: TopologyDescription,         server_descriptions: list[ServerDescription],         common_wire_version: Optional[int],         primary: Optional[ServerDescription],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\ssl_support.py | `def get_ssl_context(*dummy)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\_csot.py | `def __init__(self, timeout: Optional[float])` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\client_session.py | `def __init__(self, session: AsyncClientSession)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\client_session.py | `def __init__(self, opts: Optional[TransactionOptions], client: AsyncMongoClient[Any])` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\client_session.py | `def callback(session)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\client_session.py | `def callback(session, custom_arg, custom_kwarg=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\client_session.py | `def __init__(self, generation: int)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\client_session.py | `def __init__(self, *args: Any, **kwargs: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\cursor_base.py | `def __init__(self, conn: AsyncConnection, more_to_come: bool)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\helpers.py | `def __init__(self,         attempts: int = MAX_ADAPTIVE_RETRIES,         backoff_initial: float = _BACKOFF_INITIAL,         backoff_max: float = _BACKOFF_MAX,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\mongo_client.py | `def __init__(self,         client: AsyncMongoClient,  # type: ignore[type-arg]         server: Server,         session: Optional[AsyncClientSession],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\mongo_client.py | `def __init__(self,         mongo_client: AsyncMongoClient,  # type: ignore[type-arg]         func: _WriteCall[T] | _ReadCall[T],         bulk: Optional[Union[_AsyncBulk, _AsyncClientBulk]],         operation: str,         is_read: bool = False,         session: Optional[AsyncClientSession] = None,         read_pref: Optional[_ServerMode] = None,         address: Optional[_Address] = None,         retryable: bool = False,         operation_id: Optional[int] = None,         is_run_command: bool = False,         is_aggregate_write: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\pool.py | `def __init__(self,         conn: AsyncNetworkingInterface,         pool: Pool,         address: tuple[str, int],         id: int,         is_sdam: bool,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\srv_resolver.py | `def __init__(self,         fqdn: str,         connect_timeout: Optional[float],         srv_service_name: str,         srv_max_hosts: int = 0,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\topology.py | `def __init__(self, topology_settings: TopologySettings)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\asynchronous\topology.py | `def __init__(self,         error: BaseException,         max_wire_version: int,         sock_generation: int,         completed_handshake: bool,         service_id: Optional[ObjectId],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\client_session.py | `def __init__(self, session: ClientSession)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\client_session.py | `def __init__(self, opts: Optional[TransactionOptions], client: MongoClient[Any])` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\client_session.py | `def callback(session)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\client_session.py | `def callback(session, custom_arg, custom_kwarg=None)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\client_session.py | `def __init__(self, generation: int)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\client_session.py | `def __init__(self, *args: Any, **kwargs: Any)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\cursor_base.py | `def __init__(self, conn: Connection, more_to_come: bool)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\helpers.py | `def __init__(self,         attempts: int = MAX_ADAPTIVE_RETRIES,         backoff_initial: float = _BACKOFF_INITIAL,         backoff_max: float = _BACKOFF_MAX,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\mongo_client.py | `def __init__(self,         client: MongoClient,  # type: ignore[type-arg]         server: Server,         session: Optional[ClientSession],)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\mongo_client.py | `def __init__(self,         mongo_client: MongoClient,  # type: ignore[type-arg]         func: _WriteCall[T] | _ReadCall[T],         bulk: Optional[Union[_Bulk, _ClientBulk]],         operation: str,         is_read: bool = False,         session: Optional[ClientSession] = None,         read_pref: Optional[_ServerMode] = None,         address: Optional[_Address] = None,         retryable: bool = False,         operation_id: Optional[int] = None,         is_run_command: bool = False,         is_aggregate_write: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\pool.py | `def __init__(self,         conn: NetworkingInterface,         pool: Pool,         address: tuple[str, int],         id: int,         is_sdam: bool,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\srv_resolver.py | `def __init__(self,         fqdn: str,         connect_timeout: Optional[float],         srv_service_name: str,         srv_max_hosts: int = 0,)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\topology.py | `def __init__(self, topology_settings: TopologySettings)` | Undocumented |
| backend\.venv\Lib\site-packages\pymongo\synchronous\topology.py | `def __init__(self,         error: BaseException,         max_wire_version: int,         sock_generation: int,         completed_handshake: bool,         service_id: Optional[ObjectId],)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\authentication.py | `def __init__(self, scopes: Sequence[str] | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\background.py | `def __init__(self, tasks: Sequence[BackgroundTask] | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\config.py | `def __init__(self, environ: MutableMapping[str, str] = os.environ)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\datastructures.py | `def __init__(self, value: str)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\datastructures.py | `def __init__(self, value: str | Sequence[str])` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\datastructures.py | `def __init__(self, state: dict[str, Any] | None = None)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\requests.py | `def __init__(self, scope: Scope, receive: Receive = empty_receive, send: Send = empty_send)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\routing.py | `def __init__(self, cm: AbstractContextManager[_T])` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\routing.py | `def __init__(self, router: Router)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\staticfiles.py | `def __init__(self, headers: Headers)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\templating.py | `def __init__(self,         template: Any,         context: dict[str, Any],         status_code: int = 200,         headers: Mapping[str, str] | None = None,         media_type: str | None = None,         background: BackgroundTask | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\starlette\middleware\base.py | `def __init__(self, scope: Scope, receive: Receive)` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\config.py | `def __init__(self,         app: ASGIApplication | Callable[..., Any] | str,         host: str = "127.0.0.1",         port: int = 8000,         uds: str | None = None,         fd: int | None = None,         loop: LoopFactoryType | str = "auto",         http: type[asyncio.Protocol] | HTTPProtocolType | str = "auto",         ws: type[asyncio.Protocol] | WSProtocolType | str = "auto",         ws_max_size: int = 16 * 1024 * 1024,         ws_max_queue: int = 32,         ws_ping_interval: float | None = 20.0,         ws_ping_timeout: float | None = 20.0,         ws_per_message_deflate: bool = True,         lifespan: LifespanType = "auto",         env_file: str | os.PathLike[str] | None = None,         log_config: dict[str, Any] | str | os.PathLike[str] | RawConfigParser | IO[Any] | None = LOGGING_CONFIG,         log_level: str | int | None = None,         access_log: bool = True,         use_colors: bool | None = None,         interface: InterfaceType = "auto",         reload: bool = False,         reload_dirs: list[str] | str | None = None,         reload_delay: float = 0.25,         reload_includes: list[str] | str | None = None,         reload_excludes: list[str] | str | None = None,         workers: int | None = None,         proxy_headers: bool = True,         server_header: bool = True,         date_header: bool = True,         forwarded_allow_ips: list[str] | str | None = None,         root_path: str = "",         limit_concurrency: int | None = None,         limit_max_requests: int | None = None,         limit_max_requests_jitter: int = 0,         backlog: int = 2048,         timeout_keep_alive: int = 5,         timeout_notify: int = 30,         timeout_graceful_shutdown: int | None = None,         timeout_worker_healthcheck: int = 5,         callback_notify: Callable[..., Awaitable[None]] | None = None,         ssl_keyfile: str | os.PathLike[str] | None = None,         ssl_certfile: str | os.PathLike[str] | None = None,         ssl_keyfile_password: str | None = None,         ssl_version: int = SSL_PROTOCOL_VERSION,         ssl_cert_reqs: int = ssl.CERT_NONE,         ssl_ca_certs: str | os.PathLike[str] | None = None,         ssl_ciphers: str | None = None,         ssl_context_factory: Callable[[Config, Callable[[], ssl.SSLContext]], ssl.SSLContext] | None = None,         headers: list[tuple[str, str]] | None = None,         factory: bool = False,         h11_max_incomplete_event_size: int | None = None,         reset_contextvars: bool = False,)` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\logging.py | `def __init__(self,         fmt: str | None = None,         datefmt: str | None = None,         style: Literal["%", "{", "$"] = "%",         use_colors: bool | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\middleware\asgi2.py | `def __init__(self, app: "ASGI2Application")` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\middleware\message_logger.py | `def __init__(self, app: "ASGI3Application")` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\middleware\wsgi.py | `def __init__(self, app: WSGIApp, workers: int = 10)` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\middleware\wsgi.py | `def __init__(self,         app: WSGIApp,         executor: concurrent.futures.ThreadPoolExecutor,         scope: HTTPScope,)` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\protocols\http\httptools_impl.py | `def __init__(self,         scope: HTTPScope,         transport: asyncio.Transport,         flow: FlowControl,         logger: logging.Logger,         access_logger: logging.Logger,         access_log: bool,         default_headers: list[tuple[bytes, bytes]],         message_event: asyncio.Event,         expect_100_continue: bool,         keep_alive: bool,         on_response: Callable[..., None],)` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\protocols\websockets\websockets_impl.py | `def __init__(self,         config: Config,         server_state: ServerState,         app_state: dict[str, Any],         _loop: asyncio.AbstractEventLoop | None = None,)` | Undocumented |
| backend\.venv\Lib\site-packages\uvicorn\supervisors\watchfilesreload.py | `def __init__(self, config: Config)` | Undocumented |
| backend\app\main.py | `def startup_event()` | Undocumented |


---

## Instructions for Undocumented Elements
If any undocumented elements exist above, write documentation for them in the [docs/](file:///d:/Projects/ComprehensiveAiAssistant/docs/) folder, including:
1. Expected inputs.
2. Expected outputs/returns.
3. Brief description of functionality.
