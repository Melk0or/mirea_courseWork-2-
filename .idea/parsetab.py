
# parsetab.py
# This file is automatically generated. Do not edit.
# pylint: disable=W,C,R
_tabversion = '3.10'

_lr_method = 'LALR'

_lr_signature = 'COMMENT LPAREN NAME NUMBER RPAREN STRINGdata : NUMBER\n            | STRING\n            | NAME\n    empty :program : s_exp_lists_exp : data\n            | LPAREN s_exp_list RPAREN\n    s_exp_list : s_exp s_exp_list\n                | s_exp\n                | empty\n    '
    
_lr_action_items = {'NUMBER':([0,],[2,]),'STRING':([0,],[3,]),'NAME':([0,],[4,]),'$end':([1,2,3,4,],[0,-1,-2,-3,]),}

_lr_action = {}
for _k, _v in _lr_action_items.items():
   for _x,_y in zip(_v[0],_v[1]):
      if not _x in _lr_action:  _lr_action[_x] = {}
      _lr_action[_x][_k] = _y
del _lr_action_items

_lr_goto_items = {'data':([0,],[1,]),}

_lr_goto = {}
for _k, _v in _lr_goto_items.items():
   for _x, _y in zip(_v[0], _v[1]):
       if not _x in _lr_goto: _lr_goto[_x] = {}
       _lr_goto[_x][_k] = _y
del _lr_goto_items
_lr_productions = [
  ("S' -> data","S'",1,None,None,None),
  ('data -> NUMBER','data',1,'p_data','config_parser.py',83),
  ('data -> STRING','data',1,'p_data','config_parser.py',84),
  ('data -> NAME','data',1,'p_data','config_parser.py',85),
  ('empty -> <empty>','empty',0,'p_empty','config_parser.py',90),
  ('program -> s_exp_list','program',1,'p_program','config_parser.py',97),
  ('s_exp -> data','s_exp',1,'p_s_exp','config_parser.py',101),
  ('s_exp -> LPAREN s_exp_list RPAREN','s_exp',3,'p_s_exp','config_parser.py',102),
  ('s_exp_list -> s_exp s_exp_list','s_exp_list',2,'p_s_exp_list','config_parser.py',110),
  ('s_exp_list -> s_exp','s_exp_list',1,'p_s_exp_list','config_parser.py',111),
  ('s_exp_list -> empty','s_exp_list',1,'p_s_exp_list','config_parser.py',112),
]
